import { Result } from "@/types/result";

export function generateResult(name: string): Result {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }

  return {
    name,
    rank: (hash % 70) + 1,
    attractive: (hash % 40) + 60,
    crushes: hash % 3,
  };
}