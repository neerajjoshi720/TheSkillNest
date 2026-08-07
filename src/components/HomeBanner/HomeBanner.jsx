import { useNavigate } from "react-router-dom";

function HomeBanner() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "580px",
        background:
          "linear-gradient(135deg,#172033,#0f172a)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "70px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px,6vw,68px)",
            fontWeight: "bold",
            marginBottom: "35px",
          }}
        >
          Learn Smarter.
        </h1>

        <h2
          style={{
            fontSize: "clamp(32px,5vw,58px)",
            fontWeight: "400",
            color: "#38bdf8",
            marginBottom: "35px",
          }}
        >
          Welcome to The Skill Nest
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            color: "#dbeafe",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Master Electrical & Electronics Engineering with
          easy explanations, practical examples, video
          lectures, notes and AI-powered learning.
        </p>

        <button
          onClick={() => navigate("/courses")}
          style={{
            marginTop: "45px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "16px 35px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Courses
        </button>
      </div>
    </section>
  );
}

export default HomeBanner;