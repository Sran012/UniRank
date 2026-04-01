import { useState } from "react";

interface Props {
  onSubmit: (name: string) => void;
}

export default function InputForm({ onSubmit }: Props) {
  const [name, setName] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">UniRank</h1>

      <input
        className="border p-2 rounded"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() => onSubmit(name)}
        className="px-6 py-2 bg-black text-white rounded-xl"
      >
        Reveal 🔥
      </button>
    </div>
  );
}