import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "48px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#38bdf8,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Skill Nest
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#94a3b8",
            letterSpacing: "4px",
            fontSize: "14px",
          }}
        >
          Learn • Build • Grow
        </p>
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          gap: "35px",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/courses" style={linkStyle}>Courses</Link>
        <a href="#" style={linkStyle}>YouTube</a>
        <a href="#" style={linkStyle}>Facebook</a>
        <a href="#" style={linkStyle}>Notes</a>
        <a href="#" style={linkStyle}>AI Assistant</a>
        <a href="#" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Navbar;