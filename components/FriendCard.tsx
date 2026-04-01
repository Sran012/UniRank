import { Result } from "@/types/result";

interface Props {
  data: Result;
  onContinue: () => void;
}

export default function FriendCard({ data, onContinue }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-6 rounded-2xl shadow-xl bg-white text-center text-black">
        <h1 className="text-2xl font-bold">🔥 {data.name}</h1>
        <p>Rank #{data.rank}</p>
        <p>😳 {data.attractive}% Attractive</p>
        <p>👀 {data.crushes} Crushes</p>
      </div>

      <button
        onClick={onContinue}
        className="px-6 py-2 bg-black text-white rounded-xl"
      >
        Check My Rank
      </button>
    </div>
  );
}