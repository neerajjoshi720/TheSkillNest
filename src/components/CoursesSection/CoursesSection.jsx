function CoursesSection() {
  const courses = [
    "Electrical Engineering",
    "Electronics Engineering",
    "Basic Electronics",
    "Digital Electronics",
  ];

  return (
    <section
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "70px 40px",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "500",
          marginBottom: "70px",
        }}
      >
        📚 Our Courses
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "35px",
          maxWidth: "1500px",
          margin: "auto",
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "45px 25px",
              borderRadius: "18px",
              textAlign: "center",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "21px",
                marginBottom: "15px",
              }}
            >
              {course}
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              Learn this course step by step.
            </p>

            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "14px 40px",
                fontSize: "17px",
                borderRadius: "10px",
                cursor: "pointer",
                width: "130px",
                margin: "auto",
              }}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;