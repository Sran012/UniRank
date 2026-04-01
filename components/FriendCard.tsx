import { Result } from "@/types/result";

interface Props {
  data: Result;
  onContinue: () => void;
}

export default function FriendCard({ data, onContinue }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-8 w-full h-full max-h-[100dvh]">
      <div className="text-center relative shrink-0">
        <div className="inline-block bg-[var(--danger)] text-white px-2.5 py-0.5 text-[10px] sm:text-lg font-black uppercase border-[2.5px] border-[var(--foreground)] shadow-[3px_3px_0_var(--foreground)] rotate-2 mb-1.5 sm:mb-4">
          WARNING: EXPOSED
        </div>
        <h1 className="text-3xl sm:text-6xl font-black uppercase tracking-tighter break-all bg-[var(--foreground)] text-[var(--primary)] px-3 py-1 sm:px-5 sm:py-3 border-[3.5px] border-[var(--foreground)] shadow-[4px_4px_0_var(--warning)] text-center leading-[0.9]">
          {data.name}
        </h1>
      </div>

      <div className="neobrutal-box w-full p-3 sm:p-6 flex flex-col gap-3 sm:gap-6 bg-[var(--primary)] relative mt-1 sm:mt-2 shrink-1 max-h-[60%] overflow-y-auto sm:overflow-visible">
        <div className="space-y-3 sm:space-y-6 relative z-10 w-full font-sans">
          <div className="flex items-center justify-between border-[3.5px] border-[var(--foreground)] bg-white px-2.5 py-1.5 sm:px-4 sm:py-3 shadow-[3px_3px_0_var(--foreground)]">
            <span className="text-sm sm:text-xl font-extrabold uppercase text-[var(--foreground)]">Rank</span>
            <span className="text-2xl sm:text-4xl font-black text-[var(--danger)]">#{data.rank}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="neobrutal-box-inner p-1.5 sm:p-3 text-center flex flex-col justify-center items-center bg-white">
              <div className="text-[8px] sm:text-[12px] font-black uppercase tracking-widest bg-[var(--foreground)] text-white mb-1.5 px-1.5 py-0.5 w-full border-b-[3px] border-[var(--foreground)] -mt-1.5 -mx-1.5 sm:-mt-3 sm:-mx-3">Attractive</div>
              <div className="text-xl sm:text-3xl font-black text-[var(--danger)]">😳 {data.attractive}%</div>
            </div>
            <div className="neobrutal-box-inner p-1.5 sm:p-3 text-center flex flex-col justify-center items-center bg-white">
              <div className="text-[8px] sm:text-[12px] font-black uppercase tracking-widest bg-[var(--foreground)] text-[var(--primary)] mb-1.5 px-1.5 py-0.5 w-full border-b-[3px] border-[var(--foreground)] -mt-1.5 -mx-1.5 sm:-mt-3 sm:-mx-3">Secret Haters</div>
              <div className="text-xl sm:text-3xl font-black text-[var(--warning)]">🔪 {data.haters}</div>
            </div>
          </div>
          
          <div className="bg-[var(--secondary)] text-white border-[3.5px] border-[var(--foreground)] p-2 sm:p-4 text-center mt-3 sm:mt-6 shadow-[3.5px_3.5px_0_var(--foreground)] relative">
             <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-white text-[8px] sm:text-xs font-black px-2 py-0.5 border-[2.5px] border-[var(--foreground)] uppercase whitespace-nowrap shadow-[1.5px_1.5px_0_var(--danger)]">Red Flag</div>
             <div className="text-lg sm:text-2xl font-black mt-1 leading-tight">{data.redFlags}</div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-2 shrink-0">
        <button
          onClick={onContinue}
          className="neobrutal-button-secondary w-full py-3.5 sm:py-5 text-lg sm:text-2xl uppercase tracking-widest mt-0.5 sm:mt-2"
        >
          Check My Own Rank 🎯
        </button>
      </div>
    </div>
  );
}