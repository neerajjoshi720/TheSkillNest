function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "white",
        padding: "55px 20px 25px",
        marginTop: "0",
        minHeight: "220px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <h2
          style={{
            fontSize: "32px",
            margin: "0 0 10px",
            background: "linear-gradient(90deg,#38bdf8,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Skill Nest
        </h2>

        <p
          style={{
            color: "#94a3b8",
            margin: "0 0 35px",
          }}
        >
          Learn • Build • Grow
        </p>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #334155",
            maxWidth: "1000px",
            margin: "0 auto 22px",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
            margin: 0,
          }}
        >
          © 2026 The Skill Nest | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;