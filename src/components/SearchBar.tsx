import { Search, X } from "lucide-react";
import { useAppStore } from "@/store/appStore";

export function SearchBar() {
  const { query, setQuery } = useAppStore();

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Search
        size={16}
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-muted)",
          pointerEvents: "none",
        }}
      />
      <input
        className="search-input"
        type="text"
        placeholder="Search links..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search links"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          aria-label="Clear search"
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            padding: "2px",
          }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
