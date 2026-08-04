function HomeBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",
        color: "white",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            fontWeight: "900",
          }}
        >
          Learn Smarter.
        </h1>

        <h2
          style={{
            fontSize: "55px",
            color: "#38bdf8",
            marginBottom: "25px",
          }}
        >
          Welcome to The Skill Nest
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: "35px",
          }}
        >
          Master Electrical & Electronics Engineering with easy explanations,
          practical examples, video lectures, notes and AI-powered learning.
        </p>

        <div style={{ marginTop: "45px" }}>
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "18px 40px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
              marginRight: "20px",
            }}
          >
            Explore Courses
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "18px 40px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Watch Videos
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;