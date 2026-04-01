import { Result } from "@/types/result";

interface Props {
  data: Result;
  onShare: () => void;
}

export default function ResultCard({ data, onShare }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 w-full max-sm:scale-[0.95] max-sm:origin-center sm:py-8">
      {/* Header Block */}
      <div className="text-center relative shrink-0">
        <div className="inline-block bg-[var(--success)] text-white px-3 py-1 text-sm sm:text-lg font-black uppercase border-[3px] border-[var(--foreground)] -rotate-3 mb-2 sm:mb-4 shadow-[4px_4px_0_var(--foreground)]">
          YOUR RESULTS
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter break-all bg-[var(--foreground)] text-[var(--primary)] px-5 py-3 border-[4px] border-[var(--foreground)] shadow-[6px_6px_0_var(--primary)] text-center leading-[0.9]">
          {data.name}
        </h1>
      </div>

      {/* Main Stats Card */}
      <div className="neobrutal-box w-full p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 bg-white relative overflow-visible shrink-0 shadow-[6px_6px_0_var(--foreground)] sm:shadow-[10px_10px_0_var(--foreground)]">
        <div className="space-y-4 sm:space-y-8 relative z-10 w-full font-sans">
          {/* Rank row */}
          <div className="flex items-center justify-between border-b-[4px] border-[var(--foreground)] pb-2 sm:pb-4">
            <span className="text-sm sm:text-xl font-extrabold uppercase bg-[var(--primary)] px-3 py-1 border-[3px] border-[var(--foreground)] shadow-[3px_3px_0_var(--foreground)] -rotate-2">Rank</span>
            <span className="text-4xl sm:text-6xl font-black">#{data.rank}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="neobrutal-box-inner p-2 sm:p-4 text-center flex flex-col items-center bg-white">
              <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest bg-[var(--foreground)] text-white mb-2 px-2 py-1 w-full border-b-[4px] border-[var(--foreground)] -mt-2 -mx-2 sm:-mt-4 sm:-mx-4">Attractive</div>
              <div className="text-2xl sm:text-4xl font-black text-[var(--danger)] leading-none">😳 {data.attractive}%</div>
            </div>
            <div className="neobrutal-box-inner p-2 sm:p-4 text-center flex flex-col items-center bg-white">
              <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest bg-[var(--foreground)] text-white mb-2 px-2 py-1 w-full border-b-[4px] border-[var(--foreground)] -mt-2 -mx-2 sm:-mt-4 sm:-mx-4">Vibe</div>
              <div className="text-2xl sm:text-4xl font-black text-[var(--secondary)] leading-none">✨ {data.vibe}</div>
            </div>
            <div className="neobrutal-box-inner p-2 sm:p-4 text-center flex flex-col items-center bg-white">
              <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest bg-[var(--foreground)] text-white mb-2 px-2 py-1 w-full border-b-[4px] border-[var(--foreground)] -mt-2 -mx-2 sm:-mt-4 sm:-mx-4">Crushes</div>
              <div className="text-2xl sm:text-4xl font-black text-[var(--success)] leading-none">😻 {data.crushes}</div>
            </div>
            <div className="neobrutal-box-inner p-2 sm:p-4 text-center flex flex-col items-center bg-white">
              <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest bg-[var(--foreground)] text-white mb-2 px-2 py-1 w-full border-b-[4px] border-[var(--foreground)] -mt-2 -mx-2 sm:-mt-4 sm:-mx-4">Haters</div>
              <div className="text-2xl sm:text-4xl font-black text-[var(--warning)] leading-none">🔪 {data.haters}</div>
            </div>
          </div>

          <div className="bg-[var(--warning)] text-[var(--foreground)] border-[4px] border-[var(--foreground)] p-4 sm:p-6 text-center mt-6 sm:mt-10 shadow-[4px_4px_0_var(--foreground)] relative">
            <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-white text-xs font-black px-4 py-1 border-[3px] border-[var(--foreground)] uppercase whitespace-nowrap shadow-[3px_3px_0_var(--danger)]">Biggest Red Flag</div>
            <div className="text-xl sm:text-3xl font-black mt-2 leading-tight py-1">{data.redFlags}</div>
          </div>

          <div className="flex items-center justify-between bg-white border-[4px] border-[var(--foreground)] p-3 sm:p-5 mt-2 shadow-[4px_4px_0_var(--foreground)]">
            <span className="font-extrabold uppercase text-[var(--foreground)] text-xs sm:text-base">Loyalty </span>
            <span className="font-black text-xl sm:text-3xl text-[var(--secondary)]">🤝 {data.loyalty}%</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-3 sm:gap-4 shrink-0">
        <button
          onClick={onShare}
          className="neobrutal-button w-full py-4 sm:py-6 text-xl sm:text-3xl uppercase tracking-widest"
        >
          Share to Expose 📸
        </button>

        <p className="font-bold text-[10px] sm:text-xs text-center uppercase tracking-widest bg-[var(--foreground)] text-[var(--primary)] px-4 py-1.5 sm:py-2 border-[3px] border-[var(--foreground)] w-fit">
          Dare your friends to find out
        </p>
      </div>
    </div>
  );
}