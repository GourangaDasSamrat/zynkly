import { useAppStore } from "@/store/appStore";
import { CATEGORIES, LINKS } from "@/data/links";
import { DynamicIcon } from "./DynamicIcon";

export function CategoryFilter() {
  const { activeCategory, setCategory } = useAppStore();

  const countFor = (id: string) =>
    id === "all" ? LINKS.length : LINKS.filter((l) => l.category === id).length;

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {CATEGORIES.map(({ id, label, icon }) => (
        <button
          key={id}
          className={`pill${activeCategory === id ? " active" : ""}`}
          onClick={() => setCategory(id)}
          aria-pressed={activeCategory === id}
        >
          <DynamicIcon name={icon} size={12} />
          {label}
          <span
            style={{
              opacity: 0.65,
              fontSize: "0.68rem",
              fontWeight: 700,
            }}
          >
            {countFor(id)}
          </span>
        </button>
      ))}
    </div>
  );
}
