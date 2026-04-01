import { Result } from "@/types/result";

export function encodeData(data: Result): string {
  return btoa(JSON.stringify(data));
}

export function decodeData(str: string): Result | null {
  try {
    const parsed = JSON.parse(atob(str));

    // basic validation
    if (
      typeof parsed.name === "string" &&
      typeof parsed.rank === "number"
    ) {
      return parsed;
    }

    return null;
  } catch {
    return null;
  }
}