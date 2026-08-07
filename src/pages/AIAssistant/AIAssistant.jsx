import { useState } from "react";

function AIAssistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {

    if(question.trim() === ""){
      setAnswer("Please enter your question.");
      return;
    }

    // Temporary AI response
    setAnswer(
      "🤖 AI: " + question + 
      "\n\nThis is TheSkillNest AI Assistant. Real AI connection will be added soon."
    );

    setQuestion("");
  };


  return (
    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#eff6ff,#ede9fe)",
        padding:"60px 5%",
      }}
    >

      <div
        style={{
          maxWidth:"1000px",
          margin:"auto",
          textAlign:"center",
        }}
      >

        <p
          style={{
            color:"#2563eb",
            fontWeight:"bold",
            letterSpacing:"2px",
          }}
        >
          THE SKILL NEST AI
        </p>


        <h1
          style={{
            fontSize:"clamp(35px,6vw,55px)",
            color:"#0f172a",
            marginTop:"15px",
          }}
        >
          🤖 AI Assistant
        </h1>


        <p
          style={{
            color:"#64748b",
            fontSize:"18px",
            marginTop:"20px",
          }}
        >
          Engineering doubts, concepts aur study help ke liye AI Assistant.
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

          <h2 style={{color:"#0f172a"}}>
            Ask Your Doubt
          </h2>


          <input

            value={question}

            onChange={(e)=>setQuestion(e.target.value)}

            placeholder="Example: Explain PN Junction Diode"

            style={{
              marginTop:"25px",
              width:"80%",
              padding:"15px",
              borderRadius:"10px",
              border:"1px solid #cbd5e1",
              fontSize:"16px",
            }}

          />


          <br/>


          <button

            onClick={askAI}

            style={{
              marginTop:"20px",
              padding:"12px 30px",
              border:"none",
              borderRadius:"10px",
              background:"#2563eb",
              color:"white",
              fontWeight:"bold",
              cursor:"pointer",
            }}

          >
            Ask AI
          </button>



          {
            answer && (

              <div
                style={{
                  marginTop:"30px",
                  padding:"20px",
                  background:"#f8fafc",
                  borderRadius:"12px",
                  color:"#334155",
                  whiteSpace:"pre-line",
                  textAlign:"left",
                }}
              >
                {answer}
              </div>

            )
          }



        </div>


      </div>

    </div>
  );
}


export default AIAssistant;