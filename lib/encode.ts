import { Result } from "@/types/result";

// Helper to handle UTF-8 characters with Base64 encoding (btoa only supports Latin1)
function utf8ToBase64(str: string): string {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => 
    String.fromCharCode(parseInt(p1, 16))
  ));
}

function base64ToUtf8(str: string): string {
  return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

export function encodeData(data: Result): string {
  return utf8ToBase64(JSON.stringify(data));
}

export function decodeData(str: string): Result | null {
  try {
    const parsed = JSON.parse(base64ToUtf8(str));

    // basic validation
    if (
      typeof parsed.name === "string" &&
      typeof parsed.rank === "number"
    ) {
      return {
        name: parsed.name,
        rank: parsed.rank,
        attractive: parsed.attractive ?? 0,
        crushes: parsed.crushes ?? 0,
        haters: parsed.haters ?? 0,
        redFlags: parsed.redFlags || "None 😇",
        vibe: parsed.vibe ?? 50,
        loyalty: parsed.loyalty ?? 50,
      } as Result;
    }

    return null;
  } catch (e) {
    console.error("Decode error:", e);
    return null;
  }
}