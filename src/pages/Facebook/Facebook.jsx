function Facebook() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eff6ff,#dbeafe)",
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
            color:"#2563eb",
            fontWeight:"bold",
            letterSpacing:"2px",
          }}
        >
          THE SKILL NEST
        </p>


        <h1
          style={{
            fontSize:"clamp(35px,6vw,55px)",
            color:"#0f172a",
            marginTop:"15px",
          }}
        >
          📘 Facebook Community
        </h1>


        <p
          style={{
            color:"#64748b",
            fontSize:"18px",
            marginTop:"20px",
          }}
        >
          A learning community and source of updates
          for Electrical Engineering students.
        </p>


        <div
          style={{
            marginTop:"45px",
            background:"white",
            padding:"40px",
            borderRadius:"22px",
            boxShadow:"0 10px 30px rgba(0,0,0,0.1)",
          }}
        >

          <div style={{fontSize:"70px"}}>
            👍
          </div>


          <h2
            style={{
              color:"#0f172a",
              marginTop:"20px",
            }}
          >
            Join Our Facebook Page
          </h2>


          <p
            style={{
              color:"#64748b",
              marginTop:"15px",
            }}
          >
            Join us for notes, updates, engineering discussions,
            and educational content.
          </p>


          <a
            href="https://www.facebook.com/share/1DuDJkr4ur/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:"inline-block",
              marginTop:"30px",
              padding:"14px 35px",
              borderRadius:"12px",
              background:"#2563eb",
              color:"white",
              textDecoration:"none",
              fontWeight:"bold",
              fontSize:"17px",
            }}
          >
            Visit Facebook Page
          </a>


        </div>

      </div>
    </div>
  );
}

export default Facebook;