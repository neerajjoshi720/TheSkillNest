import { useParams, useNavigate } from "react-router-dom";

function CourseDetails() {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const courseData = {
    "electrical-engineering": {
      title: "⚡ Electrical Engineering",
      subjects: [
        "Basic Electrical Engineering",
        "Circuit Theory",
        "Electrical Machines",
        "Power System",
        "Measurements & Instruments",
        "Network Theory",
      ],
    },

    "electronics-engineering": {
      title: "🔌 Electronics Engineering",
      subjects: [
        "Semiconductor Devices",
        "Analog Electronics",
        "Communication Systems",
        "Microprocessor",
        "Control Systems",
        "Industrial Electronics",
      ],
    },

    "basic-electronics": {
      title: "💡 Basic Electronics",
      subjects: [
        "Diode",
        "Transistor",
        "BJT",
        "MOSFET",
        "LED",
        "Rectifier",
      ],
    },

    "digital-electronics": {
      title: "💻 Digital Electronics",
      subjects: [
        "Number System",
        "Logic Gates",
        "Boolean Algebra",
        "Flip Flops",
        "Counters",
        "Registers",
      ],
    },
  };

  const course = courseData[courseName];

  // Agar galat course URL open ho
  if (!course) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1>Course Not Found</h1>

        <button
          onClick={() => navigate("/courses")}
          style={{
            marginTop: "25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc, #e0f2fe)",
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

      {/* Course Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
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
            fontSize: "clamp(32px, 6vw, 50px)",
            fontWeight: "800",
            margin: 0,
          }}
        >
          {course.title}
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: "15px",
            fontSize: "17px",
          }}
        >
          Select a subject to start learning.
        </p>
      </div>

      {/* Subjects */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "25px",
        }}
      >
        {course.subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "28px",
              border: "1px solid #e2e8f0",
              boxShadow:
                "0 10px 25px rgba(15,23,42,0.08)",
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-7px)";
              e.currentTarget.style.boxShadow =
                "0 18px 35px rgba(15,23,42,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(15,23,42,0.08)";
            }}
          >
            {/* Number */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#eff6ff",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Subject */}
            <h2
              style={{
                color: "#0f172a",
                fontSize: "21px",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              {subject}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "22px",
              }}
            >
              Learn this subject step by step with
              simple explanations and study material.
            </p>

            {/* Open Button */}
            <button
              onClick={() =>
                navigate(
                  `/subject/${subject
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("&", "and")}`
                )
              }
              style={{
                width: "100%",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "13px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Open Subject →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;