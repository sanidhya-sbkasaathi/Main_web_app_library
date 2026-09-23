import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const libraryAppDir = path.resolve(__dirname, '../Library_app');
const releaseDir = path.resolve(libraryAppDir, 'release');
const setupExe = path.join(releaseDir, 'SbKasaathi-Library-Setup.exe');
const winUnpacked = path.join(releaseDir, 'win-unpacked');
const publicDownloadsDir = path.resolve(__dirname, 'public/downloads');
const distDownloadsDir = path.resolve(__dirname, 'dist/downloads');

if (process.env.VERCEL || process.env.CI || !fs.existsSync(libraryAppDir)) {
  console.log('⚡ Skipping Electron desktop packaging in Vercel/CI environment.');
  process.exit(0);
}

console.log('📦 Step 1: Checking Standalone Desktop Installer...');
const forceRebuild = process.argv.includes('--force') || process.argv.includes('--rebuild');

let shouldRebuild = forceRebuild || !fs.existsSync(setupExe);
if (!shouldRebuild && fs.existsSync(setupExe)) {
  const setupMtime = fs.statSync(setupExe).mtimeMs;
  const srcDir = path.join(libraryAppDir, 'src');
  // Check if any file in src was modified after the setup executable
  const checkFreshness = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        if (checkFreshness(full)) return true;
      } else if (fs.statSync(full).mtimeMs > setupMtime) {
        return true;
      }
    }
    return false;
  };
  if (checkFreshness(srcDir)) {
    console.log('Detected updated source code in Library_app/src - triggering fresh compilation!');
    shouldRebuild = true;
  }
}

if (shouldRebuild) {
  console.log('Compiling Standalone Electron Desktop App & Installer in Library_app...');
  execSync('npm run electron:build', { cwd: libraryAppDir, stdio: 'inherit' });
} else {
  console.log('Existing installer is up to date.');
}

fs.mkdirSync(publicDownloadsDir, { recursive: true });

console.log('📦 Step 2: Copying Real Standalone Installer to Downloads...');
const targetSetupExe = path.join(publicDownloadsDir, 'SbKasaathi-Library-Setup.exe');
fs.copyFileSync(setupExe, targetSetupExe);

console.log('📦 Step 3: Generating Standalone Portable Archive from packaged binary...');
const portableZip = path.join(publicDownloadsDir, 'SbKasaathi-Library-Portable-v1.0.0.zip');
const winSetupZip = path.join(publicDownloadsDir, 'SbKasaathi-Library-Windows-Setup-v1.0.0.zip');

if (fs.existsSync(winUnpacked)) {
  if (fs.existsSync(portableZip)) fs.unlinkSync(portableZip);
  const winUnpackedEsc = winUnpacked.replace(/\\/g, '/');
  const portableZipEsc = portableZip.replace(/\\/g, '/');
  const zipCmd = `powershell -NoProfile -NonInteractive -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${winUnpackedEsc}', '${portableZipEsc}')"`;
  try {
    execSync(zipCmd, { stdio: 'inherit' });
    fs.copyFileSync(portableZip, winSetupZip);
  } catch (e) {
    console.warn('Portable zip generation note:', e.message);
  }
}

if (fs.existsSync(distDownloadsDir)) {
  fs.mkdirSync(distDownloadsDir, { recursive: true });
  fs.copyFileSync(targetSetupExe, path.join(distDownloadsDir, 'SbKasaathi-Library-Setup.exe'));
  if (fs.existsSync(portableZip)) fs.copyFileSync(portableZip, path.join(distDownloadsDir, 'SbKasaathi-Library-Portable-v1.0.0.zip'));
  if (fs.existsSync(winSetupZip)) fs.copyFileSync(winSetupZip, path.join(distDownloadsDir, 'SbKasaathi-Library-Windows-Setup-v1.0.0.zip'));
}

console.log('✅ ALL DOWNLOAD PACKAGES READY:');
console.log(' 1. Setup Installer:', targetSetupExe, `(${(fs.statSync(targetSetupExe).size / (1024 * 1024)).toFixed(2)} MB)`);
if (fs.existsSync(portableZip)) console.log(' 2. Portable Zip:', portableZip, `(${(fs.statSync(portableZip).size / (1024 * 1024)).toFixed(2)} MB)`);
