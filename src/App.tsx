import { useEffect } from "react";
import { useAppStore } from "@/store/appStore";
import { useFilteredLinks } from "@/hooks/useFilteredLinks";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { LinkCard } from "@/components/LinkCard";
import { Pagination } from "@/components/Pagination";
import { Footer } from "@/components/Footer";
import { Ghost } from "lucide-react";
import { SITE_CONFIG } from "@/data/links";

export default function App() {
  const { resolvedTheme, theme, setTheme } = useAppStore();
  const { links, totalItems, totalPages, currentPage } = useFilteredLinks();

  useEffect(() => {
    setTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div
        className="blob"
        style={{
          width: "500px",
          height: "500px",
          top: "-100px",
          right: "-150px",
          background:
            resolvedTheme === "dark"
              ? "rgba(181,131,141,0.15)"
              : "rgba(255,205,178,0.45)",
        }}
        aria-hidden="true"
      />
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-80px",
          left: "-120px",
          background:
            resolvedTheme === "dark"
              ? "rgba(109,104,117,0.12)"
              : "rgba(229,152,155,0.25)",
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 16px 24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "540px", flex: 1 }}>
          <div
            className="animate-in"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                fontFamily: "var(--font-mono)",
                background:
                  "linear-gradient(135deg, var(--peach), var(--plum))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.04em",
              }}
            >
              {SITE_CONFIG.name}
            </div>
            <ThemeToggle />
          </div>

          <ProfileHeader />

          <div className="animate-in delay-1" style={{ margin: "20px 0 14px" }}>
            <SearchBar />
          </div>

          <div className="animate-in delay-2" style={{ marginBottom: "20px" }}>
            <CategoryFilter />
          </div>

          <div
            className="animate-in delay-3"
            style={{
              marginBottom: "12px",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              paddingLeft: "2px",
            }}
          >
            {totalItems} link{totalItems !== 1 ? "s" : ""} found
          </div>

          {links.length === 0 ? (
            <div className="empty-state animate-in delay-3">
              <Ghost size={36} style={{ opacity: 0.4 }} />
              <span>No links match your search.</span>
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {links.map((link, i) => (
                <LinkCard
                  key={link.id}
                  link={link}
                  style={{ animationDelay: `${0.05 + i * 0.04}s` }}
                />
              ))}
            </div>
          )}

          <div className="animate-in delay-5" style={{ marginTop: "20px" }}>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
