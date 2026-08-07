function YouTube() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#fff7ed,#fee2e2)",
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
            color:"#dc2626",
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
          ▶️ YouTube Learning
        </h1>


        <p
          style={{
            color:"#64748b",
            fontSize:"18px",
            marginTop:"20px",
            lineHeight:"1.7",
          }}
        >
          Electrical Engineering, Electronics aur
          technical learning videos ke liye hamara YouTube channel.
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

          <div
            style={{
              fontSize:"70px",
            }}
          >
            🎥
          </div>


          <h2
            style={{
              color:"#0f172a",
              marginTop:"20px",
            }}
          >
            Study With Neeraj
          </h2>


          <p
            style={{
              color:"#64748b",
              marginTop:"15px",
            }}
          >
            Semiconductor, Diode, Transistor,
            Digital Electronics aur Electrical Engineering
            ke concepts simple language me.
          </p>


          <a
            href="https://youtube.com/@study_withneeraj"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:"inline-block",
              marginTop:"30px",
              padding:"14px 35px",
              borderRadius:"12px",
              background:"#dc2626",
              color:"white",
              textDecoration:"none",
              fontWeight:"bold",
              fontSize:"17px",
            }}
          >
            🔔 Visit YouTube Channel
          </a>


        </div>



        <div
          style={{
            marginTop:"40px",
            background:"#ffffff",
            padding:"30px",
            borderRadius:"20px",
          }}
        >

          <h2 style={{color:"#0f172a"}}>
            📚 Latest Videos
          </h2>


          <p style={{color:"#64748b"}}>
            Your electrical & electronics videos will appear here.
          </p>


          <button
            style={{
              marginTop:"20px",
              padding:"12px 25px",
              borderRadius:"10px",
              border:"none",
              background:"#e2e8f0",
              fontWeight:"bold",
            }}
          >
            Videos Coming Soon
          </button>

        </div>


      </div>
    </div>
  );
}

export default YouTube;