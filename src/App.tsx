import React, { useState } from 'react';
import {
  Download,
  ExternalLink,
  ShieldCheck,
  Server,
  Database,
  Laptop,
  CheckCircle2,
  Copy,
  Check,
  Lock,
  Sparkles,
  Layers,
  HardDrive,
  WifiOff,
  Cpu,
  RefreshCw,
  Users,
  KeyRound,
  FileText,
  Printer,
  QrCode,
  ShieldAlert,
  ArrowRight,
  Terminal,
  HelpCircle,
  ChevronRight,
  MonitorCheck,
  Building2,
  Globe,
  Radio,
  Zap,
} from 'lucide-react';

export default function App() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'desktop' | 'server' | 'handover'>('all');
  const [activeTestStep, setActiveTestStep] = useState<number>(1);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const hostedServerUrl = "https://library-management-server-indol-psi.vercel.app/";
  const superAdminEmail = "sbkasaathilibrary@gmail.com";
  const superAdminPass = "library@1299";

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const toggleStep = (stepNumber: number) => {
    setCheckedSteps(prev => ({
      ...prev,
      [stepNumber]: !prev[stepNumber]
    }));
  };

  const handleDownloadInstaller = () => {
    setDownloadToast("Downloading SbKasaathi Library Desktop Installer (SbKasaathi-Library-Setup.exe)... 1-Click single-file installer! Creates Desktop Shortcut, launches in dedicated app mode with zero extractions required.");
    const link = document.createElement('a');
    link.href = '/downloads/SbKasaathi-Library-Setup.exe';
    link.setAttribute('download', 'SbKasaathi-Library-Setup.exe');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadToast(null), 7000);
  };

  const handleDownloadPortable = () => {
    setDownloadToast("Downloading SbKasaathi Library Portable Edition (.zip)... No installation needed. Extract and double-click 'SbKasaathi-Library-App.vbs'.");
    const link = document.createElement('a');
    link.href = '/downloads/SbKasaathi-Library-Portable-v1.0.0.zip';
    link.setAttribute('download', 'SbKasaathi-Library-Portable-v1.0.0.zip');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadToast(null), 7000);
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1400px] -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/40 border-b border-blue-500/20 px-4 py-2 text-center text-xs font-medium text-slate-300 backdrop-blur-md sticky top-0 z-50 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Official Handover Release v1.0.0 • Cloud Control Plane & Desktop Client Ready</span>
        <a 
          href={hostedServerUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline font-bold ml-1 inline-flex items-center gap-1"
        >
          Open Server <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Floating Download Started Toast */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-3xl bg-slate-900/95 border-2 border-emerald-500/80 shadow-2xl backdrop-blur-2xl text-xs space-y-2 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Download Started!
            </span>
            <button
              onClick={() => setDownloadToast(null)}
              className="text-slate-400 hover:text-white text-[10px] font-bold"
            >
              ✕
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {downloadToast}
          </p>
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-cyan-300">
            👉 Direct 1-Click: Run <span className="text-white font-bold">SbKasaathi-Library-Setup.exe</span> directly. No zip extraction or terminal needed!
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between relative z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 border border-blue-400/30">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white flex items-center gap-2">
              SbKasaathi <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono">ECOSYSTEM</span>
            </div>
            <p className="text-[10px] text-slate-400">Library Suite & Central Control Hub</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#desktop-app" className="hover:text-blue-400 transition">Desktop Client</a>
          <a href="#management-server" className="hover:text-blue-400 transition">Management Server</a>
          <a href="#handover-guide" className="hover:text-blue-400 transition">Owner Handover Guide</a>
          <a href="#architecture" className="hover:text-blue-400 transition">Security Architecture</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={hostedServerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 border border-blue-400/30 transition transform hover:-translate-y-0.5"
          >
            <Server className="w-3.5 h-3.5" />
            <span>Management Server ↗</span>
          </a>
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-medium mb-8 backdrop-blur-xl shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Complete Library Digital Transformation & Cloud Management</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span className="text-cyan-400 font-mono">Zero Offline Downtime</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
          High-Performance <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Library Desktop App</span> & Central Control Hub
        </h1>

        <p className="mt-6 text-sm sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Engineered for continuous library operations. Provides 100% offline local SQLite persistence for student admissions, seat assignments, and thermal receipts, synchronized automatically to the centralized Supabase management control plane.
        </p>

        {/* Dual High-Impact Action Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {/* Card 1: Desktop Application */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-blue-500/50 transition duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition" />
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                ● 100% OFFLINE READY
              </span>
            </div>
            <h3 className="text-xl font-black text-white mb-2">Library Desktop Client</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Install directly onto reception and counter PCs. Full student registration, seat grid, fees management, barcode scanner, and POS thermal receipts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#desktop-app"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Windows Client</span>
              </a>
              <a
                href="#desktop-features"
                className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition text-center"
              >
                View Features
              </a>
            </div>
          </div>

          {/* Card 2: Management Server */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition" />
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-bold font-mono">
                LIVE ON VERCEL
              </span>
            </div>
            <h3 className="text-xl font-black text-white mb-2">Central Management Server</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Cloud control plane for library owners and multi-branch management. Issue activation licenses, monitor PC devices, and enroll internal admin staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={hostedServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Cloud Server</span>
              </a>
              <a
                href="#server-credentials"
                className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition text-center"
              >
                Super Admin Login
              </a>
            </div>
          </div>
        </div>

        {/* Live Metrics Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl font-black text-white">100%</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Offline Local Persistence</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl font-black text-emerald-400">0 ms</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Instant UI Response</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl font-black text-cyan-400">Ed25519</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Cryptographic Signatures</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
            <div className="text-2xl font-black text-purple-400">Postgres RLS</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Tenant Security Isolation</div>
          </div>
        </div>
      </section>

      {/* SECTION 1: LIBRARY DESKTOP APP (OFFLINE-FIRST) */}
      <section id="desktop-app" className="py-20 border-t border-slate-800/80 bg-slate-950/60 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 font-mono">
                <Laptop className="w-4 h-4" /> Counter & Desk PC Client
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                SbKasaathi Library Desktop Application
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                Installed directly on Windows computers at the library front desk. Designed from the ground up for resilient, high-speed offline operation.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadInstaller}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xl shadow-blue-500/25 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Windows Installer (.exe)</span>
              </button>
            </div>
          </div>

          {/* Download Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Package 1: Full Installer */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-blue-500/40 shadow-xl space-y-4 relative">
              <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold">
                RECOMMENDED
              </div>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Direct Windows Installer (.exe)</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Single-click .exe installer. Creates Desktop Shortcut and launches dedicated app window with zero terminal windows.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                <div>Version: <span className="text-white font-bold">v1.0.0 (Direct Setup .exe)</span></div>
                <div>Target OS: <span className="text-white">Windows 10 / 11 (64-bit)</span></div>
                <div>Storage: <span className="text-white">Local SQLite + OPFS</span></div>
              </div>
              <button
                onClick={handleDownloadInstaller}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition cursor-pointer shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Setup.exe (12 MB)</span>
              </button>
            </div>

            {/* Package 2: Portable Edition */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Portable Edition (.zip)</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Zero setup required. Unzip and run directly from any folder or USB drive.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                <div>Type: <span className="text-white font-bold">Standalone Executable</span></div>
                <div>Admin Rights: <span className="text-emerald-400">Not Required</span></div>
                <div>Persistence: <span className="text-white">AppData Directory</span></div>
              </div>
              <button
                onClick={handleDownloadPortable}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Portable .ZIP</span>
              </button>
            </div>

            {/* Package 3: Web Simulation / Cloud Demo */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Local Web Instance</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Run directly on localhost dev server during owner validation.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                <div>Port: <span className="text-white font-bold">http://localhost:5173</span></div>
                <div>Database: <span className="text-purple-400">WASM In-Memory / IndexedDB</span></div>
                <div>Status: <span className="text-emerald-400">Active</span></div>
              </div>
              <a
                href="http://localhost:5173"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Local Web Client</span>
              </a>
            </div>
          </div>

          {/* Desktop App Features Matrix */}
          <div id="desktop-features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <WifiOff className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm">100% Offline-First</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Continues working seamlessly during internet outages. Local SQLite queues all operations safely.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Printer className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm">Thermal POS Receipts</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct integration with 58mm and 80mm thermal receipt printers with custom library header & QR codes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <QrCode className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm">Biometric & Barcode Ready</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Supports USB barcode scanners, RFID student smartcards, and turnstile check-in validation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm">Cryptographic Device Token</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Locked to the computer's motherboard & CPU ID. Prevents unauthorized software duplication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CENTRAL MANAGEMENT SERVER (CLOUD CONTROL PLANE) */}
      <section id="management-server" className="py-20 border-t border-slate-800/80 bg-[#070d1a] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
                <Server className="w-4 h-4" /> Cloud Management Authority
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Library Management Server (Control Plane)
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                The centralized master portal for organization multi-tenancy, commercial license provisioning, security audits, and admin staff enrollment.
              </p>
            </div>
            <div>
              <a
                href={hostedServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-xl shadow-cyan-500/25 transition transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Hosted Server ({hostedServerUrl.replace('https://', '')})</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Super Admin Credentials & Quick Access Card */}
            <div id="server-credentials" className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Super Admin Access</h4>
                    <span className="text-[11px] text-cyan-400">Root Authority Credentials</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">
                  ACTIVE
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Use these verified Super Admin credentials to log in to the central management server. Copy with one click to test authentication immediately.
              </p>

              {/* Email Box */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-400">Super Admin Email</label>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-white">
                  <span className="truncate mr-2">{superAdminEmail}</span>
                  <button
                    onClick={() => copyToClipboard(superAdminEmail, 'email')}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-sans font-bold transition cursor-pointer"
                  >
                    {copiedField === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Password Box */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-400">Master Password</label>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-white">
                  <span className="font-bold tracking-wider">{superAdminPass}</span>
                  <button
                    onClick={() => copyToClipboard(superAdminPass, 'pass')}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-sans font-bold transition cursor-pointer"
                  >
                    {copiedField === 'pass' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedField === 'pass' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Direct Link Action */}
              <div className="pt-2">
                <a
                  href={hostedServerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Log In to Management Portal Now</span>
                </a>
              </div>
            </div>

            {/* Management Server Core Modules */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Multi-Tenant Organizations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Provision new library branches, assign dedicated customer database schemas, configure contact details, and manage billing plans.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">License Issuance Engine</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Generate asymmetric cryptographic license keys (`SBK-PRO-...`) with customized expiration dates, student limits, and PC seats.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Staff Admin Enrollment</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Super Admin can enroll new company admins (Support Admin, Finance Admin, Auditor), assign permission scopes, and toggle active status.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Security Audit Logs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Immutable tracking of every login, license issue, device authorization, database sync, and administrative action with timestamps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HANDOVER CHECKLIST & TESTING GUIDE */}
      <section id="handover-guide" className="py-20 border-t border-slate-800/80 bg-slate-950/60 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 font-mono">
              <MonitorCheck className="w-4 h-4" /> Owner Handover Validation
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Library Owner Testing & Verification Guide
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Follow this step-by-step checklist to verify the full functionality of both the Offline Desktop App and Cloud Management Server before going live.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Step 1 */}
            <div 
              onClick={() => toggleStep(1)}
              className={`p-6 rounded-3xl border transition cursor-pointer ${
                checkedSteps[1] 
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <button 
                  type="button"
                  className={`mt-0.5 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition ${
                    checkedSteps[1] ? 'bg-emerald-500 text-white' : 'border border-slate-600 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Step 1: Test Offline Student Admission & Seat Assignment</h4>
                    <span className="text-[11px] font-mono text-emerald-400">Desktop Client</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Open the Library Desktop App. Navigate to Students &gt; Add New Student. Register a student with photo, assign an empty seat (e.g., Seat #A-102), collect fees, and print a thermal receipt. Verify all data saves instantaneously into local SQLite without internet requirement.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              onClick={() => toggleStep(2)}
              className={`p-6 rounded-3xl border transition cursor-pointer ${
                checkedSteps[2] 
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <button 
                  type="button"
                  className={`mt-0.5 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition ${
                    checkedSteps[2] ? 'bg-emerald-500 text-white' : 'border border-slate-600 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Step 2: Test Disconnect & Reconnect Resilience</h4>
                    <span className="text-[11px] font-mono text-emerald-400">Offline Resilience</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Disconnect the PC from WiFi / Ethernet. Continue registering admissions and updating attendance. Reconnect to WiFi. Navigate to Database &gt; Supabase Cloud Management and click "Push All Pending to Cloud". Confirm all offline entries sync smoothly with zero data loss.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              onClick={() => toggleStep(3)}
              className={`p-6 rounded-3xl border transition cursor-pointer ${
                checkedSteps[3] 
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <button 
                  type="button"
                  className={`mt-0.5 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition ${
                    checkedSteps[3] ? 'bg-emerald-500 text-white' : 'border border-slate-600 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Step 3: Authenticate into Central Management Server</h4>
                    <span className="text-[11px] font-mono text-cyan-400">Management Server</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Navigate to <a href={hostedServerUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{hostedServerUrl}</a>. Sign in with <code className="text-white bg-slate-950 px-1 py-0.5 rounded font-mono">sbkasaathilibrary@gmail.com</code> and password <code className="text-white bg-slate-950 px-1 py-0.5 rounded font-mono">library@1299</code>. Verify the dashboard loads with full analytics and tenant summary.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div 
              onClick={() => toggleStep(4)}
              className={`p-6 rounded-3xl border transition cursor-pointer ${
                checkedSteps[4] 
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <button 
                  type="button"
                  className={`mt-0.5 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition ${
                    checkedSteps[4] ? 'bg-emerald-500 text-white' : 'border border-slate-600 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Step 4: Issue a New License & Bind a Counter PC</h4>
                    <span className="text-[11px] font-mono text-blue-400">Licenses & Devices</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    In the Management Server, go to "Licenses" &gt; "Generate New License Key". Select your library branch, set entitlement parameters, and copy the key. On the desktop PC, paste the key to activate device hardware enclave authorization.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div 
              onClick={() => toggleStep(5)}
              className={`p-6 rounded-3xl border transition cursor-pointer ${
                checkedSteps[5] 
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <button 
                  type="button"
                  className={`mt-0.5 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition ${
                    checkedSteps[5] ? 'bg-emerald-500 text-white' : 'border border-slate-600 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Step 5: Enroll Internal Administrator Staff</h4>
                    <span className="text-[11px] font-mono text-purple-400">Settings & Staff</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Navigate to Settings &gt; Administrator Users. Click "+ Enroll New Admin" to add support engineers or finance staff. Test toggling active/suspended status and verify audit log generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div 
              onClick={() => toggleStep(6)}
              className={`p-6 rounded-3xl border transition cursor-pointer ${
                checkedSteps[6] 
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <button 
                  type="button"
                  className={`mt-0.5 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition ${
                    checkedSteps[6] ? 'bg-emerald-500 text-white' : 'border border-slate-600 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">Step 6: Review Audit Trail & Final Handover Sign-off</h4>
                    <span className="text-[11px] font-mono text-amber-400">Security Audit</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Navigate to Audit Logs in the management server. Confirm all login records, device activations, and tenant updates are cataloged chronologically. All testing steps are complete!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARCHITECTURE & SECURITY */}
      <section id="architecture" className="py-20 border-t border-slate-800/80 bg-[#060a12] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 font-mono">
              <ShieldCheck className="w-4 h-4" /> Robust System Design
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Enterprise Zero-Leak Architecture
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Combining offline client autonomy with cloud control plane security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Local SQLite Engine</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Desktop PCs run a high-performance local SQLite database engine with atomic Write-Ahead Logging (WAL). Even sudden power loss never corrupts active transactions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Asynchronous Sync Pipe</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Delta synchronization engine tracks local modified rows. Syncs bidirectionally to Supabase PostgreSQL when connected, resolving conflicts via timestamp vector clocks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Postgres Kernel RLS</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                PostgreSQL kernel-level Row Level Security guarantees complete tenant isolation. Every database query is cryptographically bound to the library branch ID.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              SB
            </div>
            <div>
              <span className="font-bold text-white text-sm">SbKasaathi Library Ecosystem</span>
              <p className="text-[11px] text-slate-400">Official Production Handover Release</p>
            </div>
          </div>

          <div className="text-xs text-slate-400 text-center sm:text-right space-y-1">
            <div>Central Server: <a href={hostedServerUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{hostedServerUrl}</a></div>
            <div>Super Admin: <span className="text-slate-300 font-mono">sbkasaathilibrary@gmail.com</span></div>
            <div className="text-slate-500 text-[10px]">© 2026 SbKasaathi. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
