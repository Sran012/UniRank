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
    const params = new URLSearchParams(window.location.search);
    const data = params.get("data");

    if (data) {
      const decoded = decodeData(data);
      if (decoded) {
        setFriendData(decoded);
        setView("friend");
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
    const link = `${window.location.origin}?data=${encoded}`;

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
    </div>
  );
}