import { useParams, useNavigate } from "react-router-dom";

function SubjectDetails() {
  const { subjectName } = useParams();
  const navigate = useNavigate();

  const subjectTitle = subjectName
    ? subjectName
        .replaceAll("-", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase())
    : "Subject";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
        padding: "40px 5% 80px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 22px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "35px",
        }}
      >
        ← Back
      </button>

      {/* Subject Heading */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto 45px",
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
            fontSize: "clamp(30px, 6vw, 48px)",
            fontWeight: "800",
            margin: 0,
          }}
        >
          {subjectTitle}
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: "15px",
            fontSize: "17px",
            lineHeight: "1.6",
          }}
        >
          Learn this subject with simple explanations,
          lectures and study material.
        </p>
      </div>

      {/* Two Sections */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Video Lecture */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid #e2e8f0",
            boxShadow:
              "0 10px 25px rgba(15,23,42,0.08)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "#eff6ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            🎥
          </div>

          <h2
            style={{
              color: "#0f172a",
              fontSize: "24px",
              marginBottom: "12px",
            }}
          >
            Video Lecture
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            Video lectures for this subject will be
            available soon.
          </p>

          <button
            disabled
            style={{
              width: "100%",
              background: "#e2e8f0",
              color: "#475569",
              border: "none",
              padding: "13px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "not-allowed",
            }}
          >
            🕒 Coming Soon
          </button>
        </div>

        {/* Notes & PDF */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid #e2e8f0",
            boxShadow:
              "0 10px 25px rgba(15,23,42,0.08)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "#f5f3ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            📄
          </div>

          <h2
            style={{
              color: "#0f172a",
              fontSize: "24px",
              marginBottom: "12px",
            }}
          >
            Notes & PDF
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            Study notes and PDF material for this
            subject will be available soon.
          </p>

          <button
            disabled
            style={{
              width: "100%",
              background: "#e2e8f0",
              color: "#475569",
              border: "none",
              padding: "13px 20px",
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

export default SubjectDetails;