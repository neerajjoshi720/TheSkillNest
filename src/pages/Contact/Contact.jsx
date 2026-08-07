function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f8fafc,#e0f2fe)",
        padding: "60px 5%",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
        }}
      >

        <p
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          THE SKILL NEST
        </p>


        <h1
          style={{
            fontSize: "clamp(35px,6vw,55px)",
            color: "#0f172a",
            marginTop: "15px",
          }}
        >
          📩 Contact Us
        </h1>


        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          Education, notes aur learning related queries ke liye
          humse connect kare.
        </p>


        <div
          style={{
            marginTop: "45px",
            background: "white",
            padding: "40px",
            borderRadius: "22px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >

          <h2 style={{ color: "#0f172a" }}>
            Get In Touch
          </h2>


          <p style={{ color:"#64748b", marginTop:"20px" }}>
            📧 Email: ncjoshi132@gmail.com
          </p>


          <p style={{ color:"#64748b", marginTop:"12px" }}>
            💬 WhatsApp: @Neeraj479
          </p>


          <a
            href="https://youtube.com/@study_withneeraj"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:"block",
              marginTop:"12px",
              color:"#dc2626",
              textDecoration:"none",
              fontWeight:"bold",
            }}
          >
            ▶️ YouTube: Study With Neeraj
          </a>


          <a
            href="https://www.facebook.com/share/1DuDJkr4ur/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:"block",
              marginTop:"12px",
              color:"#2563eb",
              textDecoration:"none",
              fontWeight:"bold",
            }}
          >
            📘 Facebook Community
          </a>


          <p
            style={{
              color:"#64748b",
              marginTop:"25px",
            }}
          >
            📚 The Skill Nest - Learn • Build • Grow
          </p>


        </div>

      </div>
    </div>
  );
}

export default Contact;