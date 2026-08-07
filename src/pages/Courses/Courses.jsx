import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      name: "Electrical Engineering",
      slug: "electrical-engineering",
      icon: "⚡",
      description:
        "Learn electrical circuits, machines, power systems and core electrical concepts.",
    },
    {
      name: "Electronics Engineering",
      slug: "electronics-engineering",
      icon: "🔌",
      description:
        "Explore semiconductor devices, analog electronics, communication and control systems.",
    },
    {
      name: "Basic Electronics",
      slug: "basic-electronics",
      icon: "💡",
      description:
        "Understand diodes, transistors, MOSFET, LED, rectifiers and basic electronic components.",
    },
    {
      name: "Digital Electronics",
      slug: "digital-electronics",
      icon: "💻",
      description:
        "Learn number systems, logic gates, Boolean algebra, flip-flops, counters and registers.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
        padding: "50px 5% 80px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 55px",
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
            fontSize: "clamp(34px, 6vw, 52px)",
            fontWeight: "800",
            margin: 0,
          }}
        >
          Our Courses
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "17px",
            lineHeight: "1.7",
            marginTop: "18px",
          }}
        >
          Choose your field and start learning with
          structured courses and study material.
        </p>
      </div>

      {/* Course Cards */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "28px",
        }}
      >
        {courses.map((course, index) => (
          <div
            key={course.slug}
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              padding: "30px",
              border: "1px solid #e2e8f0",
              boxShadow:
                "0 10px 30px rgba(15,23,42,0.08)",
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(15,23,42,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(15,23,42,0.08)";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "18px",
                background: "#eff6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                marginBottom: "22px",
              }}
            >
              {course.icon}
            </div>

            {/* Course Number */}
            <p
              style={{
                color: "#2563eb",
                fontSize: "13px",
                fontWeight: "bold",
                marginBottom: "8px",
                letterSpacing: "1px",
              }}
            >
              COURSE {String(index + 1).padStart(2, "0")}
            </p>

            {/* Course Name */}
            <h2
              style={{
                color: "#0f172a",
                fontSize: "23px",
                lineHeight: "1.4",
                marginBottom: "14px",
              }}
            >
              {course.name}
            </h2>

            {/* Description */}
            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                marginBottom: "28px",
                flexGrow: 1,
              }}
            >
              {course.description}
            </p>

            {/* Open Button */}
            <button
              onClick={() =>
                navigate(`/courses/${course.slug}`)
              }
              style={{
                width: "100%",
                background:
                  "linear-gradient(90deg, #2563eb, #4f46e5)",
                color: "white",
                border: "none",
                padding: "14px 20px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "scale(1)";
              }}
            >
              Open Course →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;