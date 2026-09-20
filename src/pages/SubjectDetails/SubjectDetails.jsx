import { useParams } from "react-router-dom";

function SubjectDetails() {
  const { subjectName } = useParams();

  // Subject name ko readable format me convert karna
  const formatSubjectName = (name) => {
    if (!name) return "Subject";

    return name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const subject = formatSubjectName(subjectName);

  // PDF files
  const pdfFiles = {
    "basic-electrical-engineering":
      "/notes/basic-electrical-engineering.pdf",

    "circuit-theory":
      "/notes/circuit-theory.pdf",

    "electrical-machines":
      "/notes/electrical-machines.pdf",

    "power-system":
      "/notes/power-system.pdf",

    "measurements-instruments":
      "/notes/measurements-and-instruments.pdf",

    "measurements-and-instruments":
      "/notes/measurements-and-instruments.pdf",

    "network-theory":
      "/notes/network-theory.pdf",
  };

  const pdfUrl = pdfFiles[subjectName];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eff6ff, #e0f2fe)",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px 30px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#eff6ff",
              color: "#2563eb",
              padding: "10px 18px",
              borderRadius: "30px",
              fontWeight: "700",
              marginBottom: "18px",
            }}
          >
            Electrical & Electronics Engineering
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              color: "#0f172a",
              margin: "10px 0",
            }}
          >
            {subject}
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "700px",
              margin: "15px auto 0",
            }}
          >
            Learn this subject with simple explanations, study notes and
            video lectures.
          </p>
        </div>

        {/* Study Notes */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "35px 30px",
            marginBottom: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              marginTop: 0,
              fontSize: "28px",
            }}
          >
            📚 Study Notes
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            Read the complete study material in PDF format.
          </p>

          {pdfUrl ? (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                background: "#2563eb",
                color: "white",
                padding: "16px 24px",
                borderRadius: "12px",
                fontSize: "17px",
                fontWeight: "700",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              📖 Open Study Notes →
            </a>
          ) : (
            <p
              style={{
                color: "#64748b",
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              Study notes for this subject will be added soon.
            </p>
          )}
        </div>

        {/* YouTube Video Section */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "35px 30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              marginTop: 0,
              fontSize: "28px",
            }}
          >
            🎥 Video Lectures
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            Watch Electrical and Electronics Engineering lectures on our
            YouTube channel.
          </p>

          <a
            href="https://youtube.com/@study_withneeraj"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              background: "#ef4444",
              color: "white",
              padding: "16px 24px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            ▶ Watch Video Lectures →
          </a>
        </div>

        {/* Back Button */}
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => window.history.back()}
            style={{
              border: "none",
              background: "#0f172a",
              color: "white",
              padding: "13px 25px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ← Back to Subjects
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubjectDetails;