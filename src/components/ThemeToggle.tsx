import { Sun, Moon, Monitor } from "lucide-react";
import { useAppStore, type ThemeMode } from "@/store/appStore";

const modes: { id: ThemeMode; icon: React.ReactNode; title: string }[] = [
  { id: "light", icon: <Sun size={15} />, title: "Light theme" },
  { id: "dark", icon: <Moon size={15} />, title: "Dark theme" },
  { id: "system", icon: <Monitor size={15} />, title: "System theme" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useAppStore();

  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {modes.map(({ id, icon, title }) => (
        <button
          key={id}
          className={`theme-btn${theme === id ? " active" : ""}`}
          onClick={() => setTheme(id)}
          title={title}
          aria-label={title}
          aria-pressed={theme === id}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
