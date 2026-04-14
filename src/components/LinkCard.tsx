import { ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "./DynamicIcon";
import type { LinkItem } from "@/data/links";

interface LinkCardProps {
  link: LinkItem;
  style?: React.CSSProperties;
}

export function LinkCard({ link, style }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="link-card animate-in"
      style={style}
      aria-label={`${link.label}${link.description ? ` — ${link.description}` : ""}`}
    >
      <div className="icon-box">
        <DynamicIcon name={link.icon} size={18} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: "0.875rem",
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {link.label}
          {link.featured && (
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                background: "var(--accent)",
                color: "#fff",
                borderRadius: "99px",
                padding: "1px 7px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              featured
            </span>
          )}
        </div>
        {link.description && (
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "2px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {link.description}
          </div>
        )}
      </div>

      <ArrowUpRight size={16} className="ext-arrow" />
    </a>
  );
}
