import { useState } from "react";

interface Props {
  onSubmit: (name: string) => void;
}

export default function InputForm({ onSubmit }: Props) {
  const [name, setName] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 w-full h-full max-h-[100dvh] overflow-hidden">
      <div className="text-center space-y-2 sm:space-y-3 relative shrink-0">
        <h1 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase text-[#1C293C] leading-none" style={{ textShadow: "4px 4px 0 #FDC800" }}>UniRank</h1>
        <div className="absolute -bottom-1.5 -right-3 sm:-bottom-4 sm:-right-8 bg-[#DC2626] text-white px-2 py-0.5 sm:px-3 sm:py-1 font-black uppercase text-[8px] sm:text-sm border-2 border-black rotate-6 shadow-[2px_2px_0_#1C293C]">
          BRUTALLY HONEST
        </div>
      </div>

      <div className="neobrutal-box w-full p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 bg-[#FDC800] mt-3 sm:mt-6 shrink-0">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="font-extrabold text-sm sm:text-xl uppercase tracking-wide">Who are you?</label>
          <input
            className="neobrutal-input w-full"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && name.trim()) {
                onSubmit(name);
              }
            }}
          />
        </div>

        <button
          onClick={() => {
            if (name.trim()) onSubmit(name);
          }}
          className="neobrutal-button-secondary w-full py-3 sm:py-4 text-lg sm:text-xl uppercase tracking-widest mt-1 sm:mt-2"
        >
          Reveal My Fate 🔥
        </button>
      </div>
    </div>
  );
}