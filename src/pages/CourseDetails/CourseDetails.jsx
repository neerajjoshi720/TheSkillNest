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
        "Flip-Flops",
        "Counters",
        "Registers",
      ],
    },
  };

  const course = courseData[courseName];

  // Agar course nahi mila
  if (!course) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Course Not Found</h1>

        <button
          onClick={() => navigate("/courses")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "50px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        {course.title}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {course.subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{subject}</h2>

            <p style={{ color: "gray" }}>
              Learn this subject step by step.
            </p>

            <button
              onClick={() =>
                navigate(
                  `/subject/${subject
                    .toLowerCase()
                    .replace(/ /g, "-")}`
                )
              }
              style={{
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 22px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;