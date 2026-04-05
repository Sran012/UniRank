"use client";

import { useEffect, useState } from "react";
import { Result } from "@/types/result";
import { generateResult } from "@/lib/result";
import { encodeData, decodeData } from "@/lib/encode";

import FriendCard from "@/components/FriendCard";
import InputForm from "@/components/InputForm";
import ResultCard from "@/components/ResultCard";

type View = "friend" | "input" | "result";

export default function Page() {
  const [view, setView] = useState<View>("input");
  const [friendData, setFriendData] = useState<Result | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    // Robust param extraction for mobile browsers
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(search);
    const data = params.get("data");

    if (data) {
      try {
        const decoded = decodeData(data);
        if (decoded) {
          setFriendData(decoded);
          setView("friend");
        }
      } catch (e) {
        console.error("Failed to decode share data", e);
      }
    }
  }, []);

  const handleSubmit = (name: string) => {
    const res = generateResult(name);
    setResult(res);
    setView("result");
  };

  const handleShare = () => {
    if (!result) return;

    const encoded = encodeData(result);
    // CRITICAL: We must encodeURIComponent the Base64 string so '+' and '=' characters 
    // are not corrupted into spaces by mobile apps/browsers.
    const link = `${window.location.origin}${window.location.pathname}?data=${encodeURIComponent(encoded)}`;

    navigator.clipboard.writeText(link);
    alert("Copied 🔥");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] sm:h-auto sm:min-h-screen w-full overflow-hidden sm:overflow-visible relative p-4">
      <div className="w-full max-w-md h-full sm:h-auto flex flex-col justify-center items-center gap-6 sm:py-4">
        {view === "friend" && friendData && (
          <FriendCard
            data={friendData}
            onContinue={() => setView("input")}
          />
        )}

        {view === "input" && <InputForm onSubmit={handleSubmit} />}

        {view === "result" && result && (
          <ResultCard data={result} onShare={handleShare} />
        )}
      </div>

      {/* Built by footer - Desktop only */}
      <footer className="hidden sm:flex mt-8 mb-4 items-center gap-2 px-4 py-2 bg-[#FDC800] border-[8px] border-[#1C293C] shadow-[4px_4px_0px_0px_#1C293C] rotate-[-1deg] hover:rotate-0 transition-transform cursor-pointer">
        <a 
          href="https://github.com/Sran012" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-black text-[#1C293C] uppercase tracking-wider"
        >
          built with 💖 by sujal
        </a>
      </footer>
    </div>
  );
}