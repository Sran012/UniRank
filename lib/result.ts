import { Result } from "@/types/result";

export function generateResult(name: string): Result {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31) + name.charCodeAt(i);
  }
  hash = Math.abs(hash);

  const redFlagsList = [
    "Toxic 💀", 
    "Gaslighter ⛽", 
    "Mommy Issues 🍼", 
    "Too Perfect 🤨", 
    "Replies in 3 days ⏳", 
    "Obsessive 👀", 
    "None 😇"
  ];

  return {
    name,
    rank: (hash % 100) + 1,
    attractive: (hash % 41) + 60, // 60-100%
    crushes: hash % 5,
    haters: hash % 10,
    redFlags: redFlagsList[hash % redFlagsList.length],
    vibe: (hash % 50) + 50, // 50-99
    loyalty: (hash % 31) + 70, // 70-100%
  };
}