import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark" | "system";

interface AppState {
  // Theme
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  setTheme: (t: ThemeMode) => void;

  // Search
  query: string;
  setQuery: (q: string) => void;

  // Category filter
  activeCategory: string;
  setCategory: (c: string) => void;

  // Pagination
  page: number;
  setPage: (p: number) => void;

  // items per page
  perPage: number;
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: ThemeMode): "light" | "dark" {
  return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(resolved: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", resolved);
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "system",
      resolvedTheme: resolveTheme("system"),

      setTheme: (t) => {
        const resolved = resolveTheme(t);
        applyTheme(resolved);
        set({ theme: t, resolvedTheme: resolved, page: 1 });
      },

      query: "",
      setQuery: (q) => set({ query: q, page: 1 }),

      activeCategory: "all",
      setCategory: (c) => set({ activeCategory: c, page: 1, query: "" }),

      page: 1,
      setPage: (p) => set({ page: p }),

      perPage: 8,
    }),
    {
      name: "zynkly-prefs",
      partialize: (s) => ({ theme: s.theme }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const resolved = resolveTheme(state.theme);
          applyTheme(resolved);
          state.resolvedTheme = resolved;
        }
      },
    },
  ),
);

// Init system theme listener
if (typeof window !== "undefined") {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", () => {
    const { theme, setTheme } = useAppStore.getState();
    if (theme === "system") setTheme("system");
  });
}
