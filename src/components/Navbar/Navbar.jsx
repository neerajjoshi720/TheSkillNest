import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "20px 5%",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Skill Nest
          </Link>

          <p
            style={{
              color: "#94a3b8",
              letterSpacing: "4px",
              marginTop: "6px",
              fontSize: "13px",
            }}
          >
            Learn • Build • Grow
          </p>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/courses">
            Courses
          </Link>

          <Link className="nav-link" to="/youtube">
            YouTube
          </Link>

          <Link className="nav-link" to="/facebook">
            Facebook
          </Link>

          <Link className="nav-link" to="/notes">
            Notes
          </Link>

          <Link className="nav-link" to="/ai-assistant">
            AI Assistant
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <style>
        {`
          .nav-link {
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .nav-link:hover {
            color: #38bdf8;
            transform: translateY(-1px);
          }

          @media (max-width: 900px) {
            nav > div {
              flex-direction: column !important;
            }

            .nav-link {
              font-size: 15px;
            }
          }

          @media (max-width: 600px) {
            nav {
              padding: 18px 12px !important;
            }

            .nav-link {
              font-size: 14px;
            }

            nav > div > div:nth-child(2) {
              gap: 15px !important;
            }
          }

          @media (max-width: 420px) {
            .nav-link {
              font-size: 13px;
            }

            nav > div > div:nth-child(2) {
              gap: 12px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;