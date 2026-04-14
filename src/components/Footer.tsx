import { SITE_CONFIG } from "@/data/links";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px 0 8px",
        fontSize: "0.7rem",
        color: "var(--text-muted)",
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.03em",
      }}
    >
      <div style={{ marginBottom: "4px" }}>
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>
          {SITE_CONFIG.name}
        </span>{" "}
        · MIT License · © {year}
      </div>
      <div>
        Built by{" "}
        <a
          href="https://gouranga.eu.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {SITE_CONFIG.username}
        </a>
      </div>
    </footer>
  );
}
