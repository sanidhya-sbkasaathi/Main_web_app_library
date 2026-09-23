import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const libraryAppDir = path.resolve(__dirname, '../Library_app');
const releaseDir = path.resolve(libraryAppDir, 'release');
const setupExe = path.join(releaseDir, 'SbKasaathi-Library-Setup.exe');
const publicDownloadsDir = path.resolve(__dirname, 'public/downloads');

console.log('📦 Standalone Windows Desktop Installer Verification...');
if (!fs.existsSync(setupExe)) {
  console.log('Building Electron standalone app...');
  execSync('npm run electron:build', { cwd: libraryAppDir, stdio: 'inherit' });
}

fs.mkdirSync(publicDownloadsDir, { recursive: true });
const targetSetupExe = path.join(publicDownloadsDir, 'SbKasaathi-Library-Setup.exe');
fs.copyFileSync(setupExe, targetSetupExe);

console.log('✅ Standalone Installer is ready in public/downloads/SbKasaathi-Library-Setup.exe');
