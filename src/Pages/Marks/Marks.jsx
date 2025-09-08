// src/pages/Marks.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Marks page — dynamic card bank UI (inline styles only)
 * - Cards are defined in the `cards` object below.
 * - Each card has: id, title, subtitle, path (route), accent color, icon (emoji here).
 *
 * Usage: place this component on a route like "/marks"
 * Ensure you have routes for paths such as "/marks/first-sequence" etc.
 */

export default function Marks() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  // All cards defined in an object (easy to extend)
  const cards = useMemo(
    () => [
      { id: "1st", title: "First Sequence", subtitle: "Term 1 marks", path: "/marks/first-sequence", icon: "1️⃣" },
      { id: "2nd", title: "Second Sequence", subtitle: "Term 2 marks", path: "/marks/second-sequence", icon: "2️⃣" },
      { id: "3rd", title: "Third Sequence", subtitle: "Term 3 marks", path: "/marks/third-sequence", icon: "3️⃣" },
      { id: "4th", title: "Fourth Sequence", subtitle: "Term 4 marks", path: "/marks/fourth-sequence", icon: "4️⃣" },
      { id: "5th", title: "Fifth Sequence", subtitle: "Term 5 marks", path: "/marks/fifth-sequence", icon: "5️⃣" },
      { id: "6th", title: "Sixth Sequence", subtitle: "Term 6 marks", path: "/marks/sixth-sequence", icon: "6️⃣" },

      { id: "mock-olevel", title: "Mock Result — O-Level", subtitle: "Official mock results (O-Level)", path: "/marks/mock-olevel", icon: "📘" },
      { id: "mock-alevel", title: "Mock Result — A-Level", subtitle: "Official mock results (A-Level)", path: "/marks/mock-alevel", icon: "📗" },

      { id: "premock-olevel", title: "Pre-Mock — O-Level", subtitle: "Pre-mock tests (O-Level)", path: "/marks/premock-olevel", icon: "📝" },
      { id: "premock-alevel", title: "Pre-Mock — A-Level", subtitle: "Pre-mock tests (A-Level)", path: "/marks/premock-alevel", icon: "📝" },
    ],
    []
  );

  // Filter cards by search
  const filtered = cards.filter(
    (c) =>
      c.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.trim().toLowerCase()) ||
      c.icon.includes(query.trim())
  );

  // inline styles: main theme uses greens and soft neutrals
  const styles = {
    page: {
      minHeight: "100vh",
      padding: 24,
      boxSizing: "border-box",
      fontFamily: "'Inter', Roboto, system-ui, -apple-system, 'Segoe UI', Arial",
      background: "linear-gradient(180deg, #f7fbf8 0%, #eef7ee 100%)",
      color: "#05201a",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      marginBottom: 20,
      flexWrap: "wrap",
    },
    titleBox: {
      display: "flex",
      alignItems: "center",
      gap: 14,
    },
    logoCircle: {
      width: 56,
      height: 56,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg,#1a7a4f,#0db36a)",
      color: "white",
      fontWeight: 800,
      fontSize: 22,
      boxShadow: "0 8px 22px rgba(6,99,61,0.12)",
    },
    heading: {
      margin: 0,
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: -0.4,
      color: "#043329",
    },
    subtitle: {
      margin: 0,
      fontSize: 13,
      color: "#145a3f",
      opacity: 0.9,
    },
    searchWrap: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#ffffff",
      padding: "8px 10px",
      borderRadius: 12,
      boxShadow: "0 6px 18px rgba(7,83,49,0.06)",
      border: "1px solid rgba(10,90,56,0.06)",
    },
    input: {
      border: "none",
      outline: "none",
      width: 260,
      fontSize: 14,
      background: "transparent",
      color: "#083426",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 18,
      marginTop: 18,
    },
    card: {
      background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,255,250,0.9))",
      borderRadius: 14,
      padding: 18,
      boxShadow: "0 10px 30px rgba(6,100,60,0.08)",
      border: "1px solid rgba(10,90,56,0.06)",
      cursor: "pointer",
      transition: "transform .22s cubic-bezier(.2,.9,.3,1), box-shadow .22s",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 120,
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 18px 40px rgba(6,100,60,0.14)",
    },
    topRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    iconWrap: (accent) => ({
      width: 56,
      height: 56,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 26,
      boxShadow: "inset 0 -6px 18px rgba(0,0,0,0.03)",
      background: accent,
      color: "white",
      fontWeight: 800,
    }),
    cardTitle: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      color: "#043329",
    },
    cardSubtitle: {
      margin: 0,
      fontSize: 13,
      color: "#1e563e",
      opacity: 0.95,
      fontWeight: 600,
    },
    footerRow: {
      marginTop: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    viewBtn: {
      padding: "8px 12px",
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
      color: "#05482f",
      background: "rgba(6,110,70,0.08)",
    },
    stats: {
      fontSize: 12,
      color: "#0b3e2a",
      opacity: 0.85,
    },
    empty: {
      padding: 30,
      borderRadius: 12,
      background: "#fff",
      textAlign: "center",
      color: "#526b5c",
      boxShadow: "0 6px 22px rgba(6,100,60,0.04)",
    },
  };

  // accent generator (greens)
  const accentFor = (id) => {
    const palette = [
      "linear-gradient(135deg,#16a34a,#059669)", // emerald
      "linear-gradient(135deg,#048857,#16a34a)",
      "linear-gradient(135deg,#0ea5a1,#10b981)",
      "linear-gradient(135deg,#15803d,#22c55e)",
      "linear-gradient(135deg,#065f46,#059669)",
      "linear-gradient(135deg,#064e3b,#10b981)",
    ];
    let i = Math.abs(
      id
        .toString()
        .split("")
        .reduce((s, ch) => s + ch.charCodeAt(0), 0)
    );
    return palette[i % palette.length];
  };

  // click handler
  const open = (path, id) => {
    setActive(id);
    // small visual delay for nicer UX
    setTimeout(() => {
      navigate(path);
    }, 160);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.titleBox}>
          <div style={styles.logoCircle}>M</div>
          <div>
            <h1 style={styles.heading}>Marks Dashboard</h1>
            <p style={styles.subtitle}>Access all sequences, mocks and pre-mocks</p>
          </div>
        </div>

        <div style={styles.searchWrap}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.7 }}>
            <path d="M21 21l-4.35-4.35" stroke="#0b4f38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="6" stroke="#0b4f38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <input
            style={styles.input}
            placeholder="Search sequences, mocks…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div style={styles.grid}>
        {filtered.length === 0 ? (
          <div style={styles.empty}>
            No matches for <strong>{query}</strong>. Try clearing the search.
          </div>
        ) : (
          filtered.map((c) => {
            const isActive = active === c.id;
            return (
              <article
                key={c.id}
                role="button"
                tabIndex={0}
                onClick={() => open(c.path, c.id)}
                onKeyDown={(e) => (e.key === "Enter" ? open(c.path, c.id) : null)}
                style={{
                  ...styles.card,
                  ...(isActive ? styles.cardHover : {}),
                }}
                aria-label={`${c.title} — ${c.subtitle}`}
              >
                <div style={styles.topRow}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={styles.iconWrap(accentFor(c.id))}>{c.icon}</div>
                    <div>
                      <h3 style={styles.cardTitle}>{c.title}</h3>
                      <div style={styles.cardSubtitle}>{c.subtitle}</div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 12, color: "#0b3e2a", fontWeight: 700 }}>Live</div>
                    <div style={{ fontSize: 11, color: "#145a3f", opacity: 0.85 }}>From mobile</div>
                  </div>
                </div>

                <div style={styles.footerRow}>
                  <div style={styles.stats}>Tap to open</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      open(c.path, c.id);
                    }}
                    style={styles.viewBtn}
                    aria-label={`Open ${c.title}`}
                  >
                    Open
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
