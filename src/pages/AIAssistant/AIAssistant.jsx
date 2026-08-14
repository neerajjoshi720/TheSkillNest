import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (question.trim() === "") {
      setAnswer("Please enter your question.");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setAnswer(data.reply || "AI did not return a response.");
      setQuestion("");
    } catch (error) {
      console.error("AI Error:", error);

      setAnswer(
        "❌ AI se connection nahi ho pa raha.\n\n" +
          "Please make sure your backend server is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eff6ff,#ede9fe)",
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
          THE SKILL NEST AI
        </p>

        <h1
          style={{
            fontSize: "clamp(35px,6vw,55px)",
            color: "#0f172a",
            marginTop: "15px",
          }}
        >
          🤖 AI Assistant
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          An AI Assistant for engineering doubts, concepts, and study help.
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
            Ask Your Doubt
          </h2>

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                askAI();
              }
            }}
            placeholder="Example: Explain PN Junction Diode"
            disabled={loading}
            style={{
              marginTop: "25px",
              width: "80%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <br />

          <button
            onClick={askAI}
            disabled={loading}
            style={{
              marginTop: "20px",
              padding: "12px 30px",
              border: "none",
              borderRadius: "10px",
              background: loading ? "#94a3b8" : "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "16px",
            }}
          >
            {loading ? "🤖 Thinking..." : "Ask AI"}
          </button>

          {answer && (
            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
                color: "#334155",
                whiteSpace: "pre-line",
                textAlign: "left",
                lineHeight: "1.7",
                border: "1px solid #e2e8f0",
              }}
            >
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;