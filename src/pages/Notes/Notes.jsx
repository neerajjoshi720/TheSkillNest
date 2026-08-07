function Notes() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
        padding: "60px 5% 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          THE SKILL NEST
        </p>

        <h1
          style={{
            color: "#0f172a",
            fontSize: "clamp(35px, 6vw, 52px)",
            marginBottom: "18px",
          }}
        >
          📚 Study Notes
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "17px",
            lineHeight: "1.7",
            marginBottom: "45px",
          }}
        >
          Find useful notes and study material for your
          engineering subjects.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "22px",
            padding: "40px 25px",
            boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              fontSize: "55px",
              marginBottom: "20px",
            }}
          >
            📄
          </div>

          <h2
            style={{
              color: "#0f172a",
              marginBottom: "12px",
            }}
          >
            Notes Coming Soon
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.7",
            }}
          >
            Subject-wise notes and PDF study material
            will be added here soon.
          </p>

          <button
            disabled
            style={{
              marginTop: "25px",
              background: "#e2e8f0",
              color: "#475569",
              border: "none",
              padding: "13px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "not-allowed",
            }}
          >
            🕒 Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;