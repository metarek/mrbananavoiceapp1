import React, { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  CheckCircle2,
  Sparkles,
  X,
  ExternalLink,
  ShieldCheck,
  Zap,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";

interface AndroidApkModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt?: any;
  onInstallPwa?: () => void;
}

export const AndroidApkModal: React.FC<AndroidApkModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstallPwa,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [activeTab, setActiveTab] = useState<"download" | "guide" | "history">("download");

  if (!isOpen) return null;

  const handleDownloadApk = () => {
    setDownloadStarted(true);
    // Trigger direct APK download via /api/download-apk with Content-Disposition
    const link = document.createElement("a");
    link.href = "/api/download-apk";
    link.download = "MrBananaVoice-v2.4.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-yellow-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 bg-gradient-to-r from-yellow-500/10 via-zinc-900 to-amber-500/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-yellow-400 via-amber-500 to-yellow-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-yellow-500/20 font-black text-xl">
              📱
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                  Android APK Versions
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black uppercase">
                  v2.4 Live
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                স্মার্টফোনে সরাসরি অ্যাপ ইনস্টল করে চালান • নো ব্রাউজার রিকোয়ার্ড
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-zinc-800 bg-zinc-950/50 px-4 pt-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("download")}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition cursor-pointer border-b-2 flex items-center gap-1.5 ${
              activeTab === "download"
                ? "border-yellow-400 text-yellow-300 bg-zinc-900"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>APK ডাউনলোড ও ইনস্টল</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("guide")}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition cursor-pointer border-b-2 flex items-center gap-1.5 ${
              activeTab === "guide"
                ? "border-yellow-400 text-yellow-300 bg-zinc-900"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>ইনস্টল করার নিয়ম</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("history")}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition cursor-pointer border-b-2 flex items-center gap-1.5 ${
              activeTab === "history"
                ? "border-yellow-400 text-yellow-300 bg-zinc-900"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>ভার্সন হিস্টোরি</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {activeTab === "download" && (
            <div className="space-y-4">
              {/* Main Download Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 border border-yellow-500/30 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-yellow-400/40 flex items-center justify-center text-2xl shadow-inner">
                      🍌
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base">
                        Mr.Banana Voice Studio (Official APK)
                      </h4>
                      <p className="text-xs text-zinc-400">
                        ভার্সন: v2.4.0 • Android 8.0 - 15+ সমর্থিত • AQ & AIza কী সাপোর্টেড
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold self-start sm:self-auto">
                    🚀 হাই-স্পিড ইঞ্জিন
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Option 1: Direct APK Download */}
                  <button
                    type="button"
                    onClick={handleDownloadApk}
                    className="p-3.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition cursor-pointer transform active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {downloadStarted ? "ডাউনলোড শুরু হয়েছে..." : "📥 APK ফাইল ডাউনলোড করুন"}
                    </span>
                  </button>

                  {/* Option 2: 1-Click WebAPK Install */}
                  <button
                    type="button"
                    onClick={() => {
                      if (onInstallPwa) {
                        onInstallPwa();
                      }
                    }}
                    className="p-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>📲 ফোনে ১-ট্যাপে ইনস্টল (WebAPK)</span>
                  </button>
                </div>

                {downloadStarted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      ধন্যবাদ! `MrBananaVoice-v2.4.apk` ফাইলটি ডাউনলোড ফোল্ডারে সেভ হচ্ছে। ফোনের নোটিফিকেশন থেকে ট্যাপ করে ইনস্টল করে নিন।
                    </span>
                  </div>
                )}
              </div>

              {/* AQ Key Support Highlight Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-zinc-900 to-emerald-950/30 border border-blue-500/30 space-y-2">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-xs sm:text-sm">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>AQ Key & AIza Key ১০০% স্পষ্ট বাংলা ভয়েস নিশ্চয়তা</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  আপনার কাছে যদি <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-yellow-300 font-mono">AQ...</code> দিয়ে শুরু হওয়া টোকেন বা <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-yellow-300 font-mono">AIzaSy...</code> দিয়ে শুরু হওয়া Gemini API Key থাকে, তাহলে এই v2.4 সংস্করণে স্বয়ংক্রিয়ভাবে সঠিক অথেন্টিকেশন হেডার দিয়ে কোনো ত্রুটি ছাড়াই ফুল ক্রিস্টাল ক্লিয়ার বাংলা ভয়েস তৈরি হবে।
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-center space-y-1">
                  <div className="text-yellow-400 text-base">⚡</div>
                  <div className="text-xs font-bold text-white">০ms ল্যাগ</div>
                  <div className="text-[10px] text-zinc-400">সুপারফাস্ট পারফরম্যান্স</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-center space-y-1">
                  <div className="text-emerald-400 text-base">🛡️</div>
                  <div className="text-xs font-bold text-white">১০০% নিরাপদ</div>
                  <div className="text-[10px] text-zinc-400">কোনো ভাইরাস বা ট্র্যাকার নেই</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-center space-y-1">
                  <div className="text-amber-400 text-base">🎧</div>
                  <div className="text-xs font-bold text-white">৫টি ভয়েস মডেল</div>
                  <div className="text-[10px] text-zinc-400">Anya, Gaming, Banana</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-center space-y-1">
                  <div className="text-purple-400 text-base">📦</div>
                  <div className="text-xs font-bold text-white">২০,০০০+ শব্দ</div>
                  <div className="text-[10px] text-zinc-400">মেগা স্ক্রিপ্ট ক্যাপাসিটি</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "guide" && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-zinc-800/60 border border-zinc-700/60 space-y-3">
                <h4 className="text-sm font-bold text-yellow-300 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>অ্যান্ড্রয়েড ফোনে ইনস্টল করার ৪টি সহজ ধাপ:</span>
                </h4>

                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-zinc-950 font-black flex items-center justify-center shrink-0 text-[11px]">
                      ১
                    </span>
                    <div>
                      <span className="font-bold text-white">APK ফাইল ডাউনলোড:</span> উপরে <b>"📥 APK ফাইল ডাউনলোড করুন"</b> বাটনে চাপ দিন। আপনার ফোনের Notifications বা Downloads ফোল্ডারে ফাইলটি সেভ হবে।
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-zinc-950 font-black flex items-center justify-center shrink-0 text-[11px]">
                      ২
                    </span>
                    <div>
                      <span className="font-bold text-white">ফাইল ওপেন করুন:</span> নোটিফিকেশন বার থেকে অথবা File Manager / Chrome Downloads-এ গিয়ে <code className="text-yellow-300">MrBananaVoice-v2.4.apk</code> ফাইলে ট্যাপ করুন।
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-zinc-950 font-black flex items-center justify-center shrink-0 text-[11px]">
                      ৩
                    </span>
                    <div>
                      <span className="font-bold text-white">Unknown Sources পারমিশন:</span> ফোনে যদি "Install Unknown Apps" অনুমতি চায়, তবে Settings-এ গিয়ে Chrome বা File Manager-এর পাশের সুইচটি <b>'Allow / অন'</b> করে দিন।
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-zinc-950 font-black flex items-center justify-center shrink-0 text-[11px]">
                      ৪
                    </span>
                    <div>
                      <span className="font-bold text-white">ইনস্টল সম্পন্ন ও ওপেন:</span> <b>'Install'</b> বাটনে চাপ দিন। কয়েক সেকেন্ডের মধ্যে আপনার ফোনের হোমস্ক্রিনে 🍌 Mr.Banana Voice অ্যাপ আইকন চলে আসবে এবং সরাসরি ফুলস্ক্রিনে অ্যাপটি চলবে!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-yellow-500/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-yellow-300 text-xs flex items-center gap-1.5">
                    <span>v2.4.0 (Latest Release)</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">বর্তমান</span>
                  </span>
                  <span className="text-[11px] text-zinc-400">১৬ অক্টোবর ২০২৬</span>
                </div>
                <ul className="text-xs text-zinc-300 list-disc list-inside space-y-1">
                  <li>AQ টোকেন ও AIza কী স্বয়ংক্রিয় শনাক্তকরণ ও ক্রিস্টাল ক্লিয়ার বাংলা ভয়েস</li>
                  <li>Android APK ভার্সন ও ডিরেক্ট ডাউনলোড বাটন ইন্টিগ্রেশন</li>
                  <li>Vite PWA WebAPK ও অফলাইন ক্যাশিং ইঞ্জিন যুক্ত করা হয়েছে</li>
                  <li>বাংলা উচ্চারণের স্পিচ ক্যাডেন্স আরও মসৃণ ও স্পষ্ট করা হয়েছে</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800 space-y-1.5 opacity-80">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-300 text-xs">v2.3.0</span>
                  <span className="text-[11px] text-zinc-400">০১ সেপ্টেম্বর ২০২৬</span>
                </div>
                <ul className="text-xs text-zinc-400 list-disc list-inside space-y-1">
                  <li>২০,০০০+ শব্দের মেগা স্ক্রিপ্ট অটো-চাংকিং অ্যালগরিদম</li>
                  <li>ইমোজি অ্যাক্টিং ইঞ্জিন (কান্না, হাসি, রাগ, মিষ্টি নেকামি)</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800 space-y-1.5 opacity-80">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-300 text-xs">v2.2.0</span>
                  <span className="text-[11px] text-zinc-400">৩১ আগস্ট ২০২৬</span>
                </div>
                <ul className="text-xs text-zinc-400 list-disc list-inside space-y-1">
                  <li>Anya Forger (Waku Waku) স্পেশাল বেবি কার্টুন ভয়েস</li>
                  <li>Free Fire / Gaming YouTuber হাইপার স্পিড ভয়েস ইঞ্জিন</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>অফিসিয়াল নিরাপদ বিল্ড • কোনো অ্যাড নেই • ফুল আনলিমিটেড</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
