import React, { useEffect, useState } from "react";

export default function NotFound() {
  const messages = [
    "Looks like this page took a vacation 🌴",
    "We couldn't find that — but we found coffee ☕",
    "This address went missing in action 🔍",
    "Hmm... nothing here, but nice try 👏",
    "404 — the page hid from us 🤫"
  ];

  const [idx, setIdx] = useState(0);
  const [emoji, setEmoji] = useState("🧭");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t1 = setInterval(() => setIdx((i) => (i + 1) % messages.length), 3200);
    const t2 = setInterval(() => {
      const pool = ["🧭","🚧","🛰️","🔎","🤖","🌵","✨"];
      setEmoji(pool[Math.floor(Math.random() * pool.length)]);
    }, 1500);

    // clock for subtle dynamic feel
    const clock = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(clock);
    };
  }, []);

  const attemptedPath = typeof window !== "undefined" ? window.location.pathname : "/";


  const goHome = () => {
    if (window && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      // nothing special; just navigate home
    }
    window.location.href = "/";
  };
  const goBack = () => {
    if (window.history.length > 1) return window.history.back();
    return goHome();
  };


  const container = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#f7f9fc,#eef6ff)",
    fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
    padding: 20,
    boxSizing: "border-box"
  };

  const card = {
    width: "100%",
    maxWidth: 880,
    borderRadius: 18,
    padding: 30,
    boxShadow: "0 10px 30px rgba(20,30,60,0.12)",
    background: "#ffffff",
    display: "flex",
    gap: 24,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
  };

  const left = {
    flex: "1 1 380px",
    minWidth: 280
  };

  const code = {
    fontSize: 72,
    fontWeight: 800,
    margin: 0,
    lineHeight: 1,
    color: "#0f1724",
    letterSpacing: -2
  };

  const title = {
    margin: "8px 0 12px",
    fontSize: 20,
    color: "#0b1220",
    fontWeight: 700
  };

  const msg = {
    margin: 0,
    fontSize: 16,
    color: "#425065",
    lineHeight: 1.45
  };

  const meta = {
    marginTop: 14,
    fontSize: 13,
    color: "#6b7280"
  };

  const right = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "flex-end",
    flex: "0 0 220px",
    minWidth: 200
  };

  const emojiBox = {
    fontSize: 38,
    width: 64,
    height: 64,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#00A86B",
    boxShadow: "inset 0 -6px 12px rgba(0,0,0,0.03)"
  };

  const clock = {
    fontSize: 13,
    color: "#475569",
    marginTop: 6
  };

  const buttons = {
    display: "flex",
    gap: 10,
    marginTop: 10,
    width: "100%",
    justifyContent: "flex-end"
  };

  const btnPrimary = {
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: "#00A86B",
    color: "#fff",
    fontWeight: 700,
    boxShadow: "0 6px 18px rgba(11,132,255,0.18)"
  };

  const btnGhost = {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #e6edf8",
    cursor: "pointer",
    background: "transparent",
    color: "#0b1220",
    fontWeight: 700
  };

  return (
    <div style={container}>
      <div style={card} role="article" aria-label="404 Not Found">
        <div style={left}>
          <h1 style={code}>404</h1>
          <div style={title}>{messages[idx]}</div>
          <p style={msg}>
            We couldn't find <strong style={{ color: "#00A86B" }}>{attemptedPath}</strong>.
            Try returning home or go back to the previous page.
          </p>

          <div style={meta}>
            <div>Tip: Check the URL or go to the home page.</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "#94a3b8" }}>
              {now.toLocaleString()}
            </div>

            <div style={buttons}>
              <button style={btnGhost} onClick={goBack} aria-label="Go back">
                ← Go back
              </button>
              <button style={btnPrimary} onClick={goHome} aria-label="Go home">
                Go home
              </button>
            </div>
          </div>
        </div>

        <div style={right}>
          <div style={emojiBox} aria-hidden>
            {emoji}
          </div>

          <div style={clock}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#0b1220" }}>Where to next?</div>
            <div style={{ marginTop: 6, color: "#64748b", fontSize: 12 }}>
              Try refreshing or head to the dashboard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
