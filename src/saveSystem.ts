// saveSystem.ts

const SAVE_KEY = "alchemy_save_v1";

export type CustomElement = {
  id: string;
  name: string;
  emoji: string;
};

export type SaveData = {
  inventory: string[];
  discovered: string[];
  customElements: CustomElement[];
};

export function saveGame(data: SaveData): void {
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

export function loadGame(): SaveData | null {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return {
        inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [],
        discovered: Array.isArray(parsed.discovered) ? parsed.discovered : [],
        customElements: Array.isArray(parsed.customElements)
          ? parsed.customElements
          : [],
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function resetGame(): void {
  localStorage.removeItem(SAVE_KEY);
}
