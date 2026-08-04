import { useParams, useNavigate } from "react-router-dom";

function SubjectDetails() {
  const { subjectName } = useParams();
  const navigate = useNavigate();

  const cardStyle = {
    background: "#1e293b",
    color: "white",
    padding: "25px",
    borderRadius: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const buttonStyle = {
    background: "#f97316",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  };

  const iconStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    marginRight: "20px",
  };

  return (
    <div
      style={{
        padding: "50px",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          marginTop: "30px",
          marginBottom: "40px",
          textTransform: "capitalize",
          fontSize: "38px",
          color: "#0f172a",
        }}
      >
        {subjectName.replaceAll("-", " ")}
      </h1>

      {/* Video */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ ...iconStyle, background: "#2563eb" }}>🎥</div>

          <div>
            <h2 style={{ margin: 0 }}>Video Lecture</h2>
            <p style={{ color: "#cbd5e1" }}>
              Video lectures will be available soon.
            </p>
          </div>
        </div>

        <button style={buttonStyle}>
          Coming Soon
        </button>
      </div>

      {/* Notes */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ ...iconStyle, background: "#16a34a" }}>📄</div>

          <div>
            <h2 style={{ margin: 0 }}>Notes & PDF</h2>
            <p style={{ color: "#cbd5e1" }}>
              Study notes will be available soon.
            </p>
          </div>
        </div>

        <button style={buttonStyle}>
          Coming Soon
        </button>
      </div>

      {/* Quiz */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ ...iconStyle, background: "#9333ea" }}>📝</div>

          <div>
            <h2 style={{ margin: 0 }}>Practice Quiz</h2>
            <p style={{ color: "#cbd5e1" }}>
              Test your knowledge with quizzes.
            </p>
          </div>
        </div>

        <button style={buttonStyle}>
          Coming Soon
        </button>
      </div>
    </div>
  );
}

export default SubjectDetails;