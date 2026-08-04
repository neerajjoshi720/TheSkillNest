import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Electrical Engineering",
      description: "Learn electrical engineering from basic to advanced.",
      path: "electrical-engineering",
      icon: "⚡",
    },
    {
      title: "Electronics Engineering",
      description: "Study electronic circuits and semiconductor devices.",
      path: "electronics-engineering",
      icon: "🔌",
    },
    {
      title: "Basic Electronics",
      description: "Learn diode, transistor, MOSFET, LED and rectifiers.",
      path: "basic-electronics",
      icon: "💡",
    },
    {
      title: "Digital Electronics",
      description: "Learn logic gates, flip-flops, counters and registers.",
      path: "digital-electronics",
      icon: "💻",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "60px 40px",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "60px",
        }}
      >
        📚 Our Courses
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,.3)",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                marginBottom: "20px",
              }}
            >
              {course.icon}
            </div>

            <h2>{course.title}</h2>

            <p
              style={{
                color: "#cbd5e1",
                margin: "20px 0",
                lineHeight: "28px",
              }}
            >
              {course.description}
            </p>

            <button
              onClick={() => navigate(`/courses/${course.path}`)}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 30px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
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

export default Courses;