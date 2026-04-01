import { Result } from "@/types/result";

interface Props {
  data: Result;
  onShare: () => void;
}

export default function ResultCard({ data, onShare }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:gap-6 w-full h-full max-h-[100dvh]">
      {/* Header Block */}
      <div className="text-center relative shrink-0">
        <div className="inline-block bg-[var(--success)] text-white px-2 py-0.5 text-[10px] sm:text-lg font-black uppercase border-[2.5px] border-[var(--foreground)] -rotate-3 mb-1 sm:mb-4 shadow-[3px_3px_0_var(--foreground)]">
          YOUR RESULTS
        </div>
        <h1 className="text-3xl sm:text-6xl font-black uppercase tracking-tighter break-all bg-[var(--foreground)] text-[var(--primary)] px-3 py-1 sm:px-5 sm:py-3 border-[3.5px] border-[var(--foreground)] shadow-[4px_4px_0_var(--primary)] text-center leading-[0.9]">
          {data.name}
        </h1>
      </div>

      {/* Main Stats Card */}
      <div className="neobrutal-box w-full p-3 sm:p-6 flex flex-col gap-3 sm:gap-6 bg-white relative overflow-visible shrink-1 max-h-[60%] sm:max-h-none overflow-y-auto sm:overflow-visible">
        <div className="space-y-3 sm:space-y-6 relative z-10 w-full font-sans">
          {/* Rank row - more compact */}
          <div className="flex items-center justify-between border-b-[3px] border-[var(--foreground)] pb-1.5 sm:pb-4">
            <span className="text-sm sm:text-xl font-extrabold uppercase bg-[var(--primary)] px-2 py-0.5 border-[2.5px] border-[var(--foreground)] shadow-[2.5px_2.5px_0_var(--foreground)] -rotate-2">Rank</span>
            <span className="text-3xl sm:text-5xl font-black">#{data.rank}</span>
          </div>

          {/* Grid with 4 metrics - tighter gaps */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {[
              { label: 'Attractive', value: `😳 ${data.attractive}%`, color: 'text-[var(--danger)]', labelBg: 'text-white' },
              { label: 'Vibe Score', value: `✨ ${data.vibe}`, color: 'text-[var(--secondary)]', labelBg: 'text-[var(--primary)]' },
              { label: 'Crushes', value: `😻 ${data.crushes}`, color: 'text-[var(--success)]', labelBg: 'text-white' },
              { label: 'Haters', value: `🔪 ${data.haters}`, color: 'text-[var(--warning)]', labelBg: 'text-[var(--primary)]' },
            ].map((stat, i) => (
              <div key={i} className="neobrutal-box-inner p-1.5 sm:p-3 text-center flex flex-col justify-center items-center bg-white">
                <div className={`text-[8px] sm:text-[12px] font-black uppercase mb-1 tracking-widest bg-[var(--foreground)] ${stat.labelBg} px-1.5 py-0.5 w-full border-b-[3px] border-[var(--foreground)] -mt-1.5 -mx-1.5 sm:-mt-3 sm:-mx-3 mb-1.5 sm:mb-3`}>{stat.label}</div>
                <div className={`text-xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Red Flag Block - reduced heights */}
          <div className="bg-[var(--warning)] text-[var(--foreground)] border-[3.5px] border-[var(--foreground)] p-2 sm:p-4 text-center mt-3 sm:mt-6 shadow-[3.5px_3.5px_0_var(--foreground)] relative">
            <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-white text-[8px] sm:text-xs font-black px-2.5 py-0.5 border-[2.5px] border-[var(--foreground)] uppercase whitespace-nowrap shadow-[1.5px_1.5px_0_var(--danger)]">Biggest Red Flag</div>
            <div className="text-lg sm:text-2xl font-black mt-1 leading-tight">{data.redFlags}</div>
          </div>
          
          <div className="flex items-center justify-between bg-white border-[3.5px] border-[var(--foreground)] p-2 sm:p-4 shadow-[3.5px_3.5px_0_var(--foreground)]">
             <span className="text-[10px] sm:text-base font-extrabold uppercase text-[var(--foreground)]">Loyalty </span>
             <span className="font-black text-lg sm:text-2xl text-[var(--secondary)]">🤝 {data.loyalty}%</span>
          </div>
        </div>
      </div>

      {/* Action Block */}
      <div className="w-full flex flex-col items-center gap-1 sm:gap-2 shrink-0">
        <button
          onClick={onShare}
          className="neobrutal-button w-full py-3.5 sm:py-5 text-lg sm:text-2xl uppercase tracking-widest"
        >
          Share to Expose 📸
        </button>

        <p className="font-bold text-[9px] sm:text-xs text-center uppercase tracking-widest bg-[var(--foreground)] text-[var(--primary)] px-2.5 py-1 sm:px-4 sm:py-2 border-[2.5px] border-[var(--foreground)] w-fit">
          Dare your friends to find out
        </p>
      </div>
    </div>
  );
}