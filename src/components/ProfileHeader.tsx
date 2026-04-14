import { MapPin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/links";

export function ProfileHeader() {
  return (
    <div
      className="animate-in"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        paddingBottom: "8px",
        textAlign: "center",
      }}
    >
      {/* Avatar */}
      <div className="avatar-ring">
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, var(--blush), var(--plum))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: 800,
            color: "#fff",
            fontFamily: "var(--font-mono)",
            letterSpacing: "-0.05em",
          }}
        >
          {SITE_CONFIG.avatarInitials}
        </div>
      </div>

      {/* Name & handle */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: 800,
            fontFamily: "var(--font-mono)",
            color: "var(--text)",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}
        >
          {SITE_CONFIG.username}
        </h1>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {SITE_CONFIG.description}
        </p>
      </div>

      {/* Location + site */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          <MapPin size={13} />
          {SITE_CONFIG.location}
        </span>

        <a
          href={SITE_CONFIG.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.75rem",
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          <ExternalLink size={13} />
          {SITE_CONFIG.siteUrl.replace("https://", "")}
        </a>
      </div>

      {/* Divider */}
      <div className="divider" style={{ width: "100%", maxWidth: "300px" }} />
    </div>
  );
}
