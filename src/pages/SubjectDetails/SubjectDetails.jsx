
import { useParams } from "react-router-dom";

function SubjectDetails() {
  const { subjectName } = useParams();

  const formatSubjectName = (name) => {
    if (!name) return "Subject";

    return name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const subject = formatSubjectName(subjectName);

  // Har subject ke liye book aur PDF links
  // Yahan apne actual external links paste karne hain.
  const studyResources = {
    "basic-electrical-engineering": {
      book: "https://drive.google.com/file/d/1lE19d6E2-8k-rIdJ_ezV4SSH0hJoCjmO/view",
      pdf: "https://drive.google.com/file/d/1lE19d6E2-8k-rIdJ_ezV4SSH0hJoCjmO/view",
    },
    "circuit-theory": {
      book: "https://www.gacbe.ac.in/images/E%20books/Bird%20-%20Electrical%20Circuit%20Theory%20and%20Technology%202nd%20Rev.pdf",
      pdf: "https://www.gacbe.ac.in/images/E%20books/Bird%20-%20Electrical%20Circuit%20Theory%20and%20Technology%202nd%20Rev.pdf",
    },
    "electrical-machines": {
      book: "https://www.scribd.com/document/521773754/Kretyrx-ELECTRICAL-Machine-Notes",
      pdf: "https://www.scribd.com/document/521773754/Kretyrx-ELECTRICAL-Machine-Notes",
    },
    "power-system": {
      book: "https://studylib.net/doc/27425492/power-system-by-c.l.-wadhwa?p=37#google_vignette",
      pdf: "https://studylib.net/doc/27425492/power-system-by-c.l.-wadhwa?p=37#google_vignette",
    },
    "measurements-and-instruments": {
      book: "https://www.vssut.ac.in/lecture_notes/lecture1423813026.pdf",
      pdf: "https://www.vssut.ac.in/lecture_notes/lecture1423813026.pdf",
    },
    "network-theory": {
      book: "https://mrcet.com/downloads/digital_notes/EEE/Network%20Theory.pdf",
      pdf: "https://mrcet.com/downloads/digital_notes/EEE/Network%20Theory.pdf",
    },

    "semiconductor-devices": {
      book: "https://www2.mvcc.edu/users/faculty/jfiore/Linear/SemiconductorDevices.pdf",
      pdf: "https://www2.mvcc.edu/users/faculty/jfiore/Linear/SemiconductorDevices.pdf",
    },
    "analog-electronics": {
      book: "https://www.scribd.com/document/369463811/Analog-CMOS-Circuit-Design-Allen-Holberg#google_vignette",
      pdf: "https://www.scribd.com/document/369463811/Analog-CMOS-Circuit-Design-Allen-Holberg#google_vignette",
    },
    "communication-systems": {
      book: "https://drive.google.com/file/d/0BwveNy2zF1QXTl9Kbl9pNkxNaXc/preview?resourcekey=0-Th2a4ZXcDH_JkQLPdLxxWg",
      pdf: "https://drive.google.com/file/d/0BwveNy2zF1QXTl9Kbl9pNkxNaXc/preview?resourcekey=0-Th2a4ZXcDH_JkQLPdLxxWg",
    },
    "microprocessor": {
      book: "https://cdn.bookey.app/files/pdf/book/en/microprocessors-and-microcontrollers.pdf",
      pdf: "https://cdn.bookey.app/files/pdf/book/en/microprocessors-and-microcontrollers.pdf",
    },
    "control-systems": {
      book: "https://kp.kiit.ac.in/pdf_files/04/Study-Material_6th-Sem-Elect_Control-System-Engg..pdf",
      pdf: "",
    },
    "industrial-electronics": {
      book: "https://www.scribd.com/document/353464992/Industrial-Electronics",
      pdf: "https://www.scribd.com/document/353464992/Industrial-Electronics",
    },

    "diode": {
      book: "https://stannescet.ac.in/cms/staff/qbank/ECE/Notes/EC8252-ELECTRONICDEVICES-997787639-EC8252%20notes.pdf",
      pdf: "https://stannescet.ac.in/cms/staff/qbank/ECE/Notes/EC8252-ELECTRONICDEVICES-997787639-EC8252%20notes.pdf",
    },
    "transistor": {
      book: "https://vtda.org/books/Electronics/TransistorCircuits_RufusPTurner.pdf",
      pdf: "https://vtda.org/books/Electronics/TransistorCircuits_RufusPTurner.pdf",
    },
    "bjt": {
      book: "https://www.ee.iitb.ac.in/~sequel/ee101/ee101_bjt_1.pdf",
      pdf: "https://www.ee.iitb.ac.in/~sequel/ee101/ee101_bjt_1.pdf",
    },
    "mosfet": {
      book: "https://web.iitd.ac.in/~bkrishna/teaching/MLL738/MOSFETS.pdf",
      pdf: "https://web.iitd.ac.in/~bkrishna/teaching/MLL738/MOSFETS.pdf",
    },
    "led": {
      book: "https://application.wiley-vch.de/books/sample/3527408398_c01.pdf",
      pdf: "https://application.wiley-vch.de/books/sample/3527408398_c01.pdf",
    },
    "rectifier": {
      book: "https://www.bharathuniv.ac.in/downloads/ece/SUBBULAKHSMI-EC/Rectifiers-SUBBULAKSHMI.pdf",
      pdf: "https://www.bharathuniv.ac.in/downloads/ece/SUBBULAKHSMI-EC/Rectifiers-SUBBULAKSHMI.pdf",
    },

    "number-system": {
      book: "https://www.scribd.com/document/713237344/CHAPTER-1-number-system-complete-pdf",
      pdf: "https://www.scribd.com/document/713237344/CHAPTER-1-number-system-complete-pdf",
    },
    "logic-gates": {
      book: "https://mau.ac.in/LMS/SBAS/SBAS%20Logic-Gates%20by%20Dr.%20Pooja.pdf",
      pdf: "https://mau.ac.in/LMS/SBAS/SBAS%20Logic-Gates%20by%20Dr.%20Pooja.pdf",
    },
    "boolean-algebra": {
      book: "https://drive.google.com/file/d/0B-a244ibrnruNTJ1d2hSeEtMUms/view?resourcekey=0-9gqqq9BfKREtDNeT-6qM2g",
      pdf: "https://drive.google.com/file/d/0B-a244ibrnruNTJ1d2hSeEtMUms/view?resourcekey=0-9gqqq9BfKREtDNeT-6qM2g",
    },
    "flip-flops": {
      book: "https://www.scribd.com/document/352589567/Flipflop-Conversion",
      pdf: "https://www.scribd.com/document/352589567/Flipflop-Conversion",
    },
    "counters": {
      book: "https://epgp.inflibnet.ac.in/epgpdata/uploads/epgp_content/S000574EE/P001494/M019818/ET/1493267853p4m19_etext.pdf",
      pdf: "",
    },
    "registers": {
      book: "https://nscpolteksby.ac.id/ebook/files/Ebook/Computer%20Engineering/Digital%20Design/Chapter%206%20-%20Registers%20and%20Counters.pdf",
      pdf: "https://nscpolteksby.ac.id/ebook/files/Ebook/Computer%20Engineering/Digital%20Design/Chapter%206%20-%20Registers%20and%20Counters.pdf",
    },
  };

  const resource = studyResources[subjectName];

  const buttonStyle = {
    display: "inline-block",
    textDecoration: "none",
    color: "white",
    padding: "14px 22px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "700",
    textAlign: "center",
    flex: "1",
    minWidth: "160px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eff6ff, #e0f2fe)",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px 30px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#eff6ff",
              color: "#2563eb",
              padding: "10px 18px",
              borderRadius: "30px",
              fontWeight: "700",
              marginBottom: "18px",
            }}
          >
            Electrical & Electronics Engineering
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              color: "#0f172a",
              margin: "10px 0",
            }}
          >
            {subject}
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "700px",
              margin: "15px auto 0",
            }}
          >
            Learn this subject with simple explanations, study notes and
            video lectures.
          </p>
        </div>

        {/* Study Notes */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "35px 30px",
            marginBottom: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
          }}
        >
          <h2 style={{ color: "#0f172a", marginTop: 0, fontSize: "28px" }}>
            📚 Study Notes & Books
          </h2>

          <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "16px" }}>
            Read books online or download available PDF study materials.
          </p>

          {resource && (resource.book || resource.pdf) ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              {resource.book && (
                <a
                  href={resource.book}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...buttonStyle,
                    background: "#2563eb",
                  }}
                >
                  📖 View Book
                </a>
              )}

              {resource.pdf && (
                <a
                  href={resource.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...buttonStyle,
                    background: "#16a34a",
                  }}
                >
                  ⬇ Download / Open PDF
                </a>
              )}
            </div>
          ) : (
            <p
              style={{
                color: "#64748b",
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              Study resources for this subject are being prepared.
            </p>
          )}

          <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "18px" }}>
            PDF download availability depends on the external website.
          </p>
        </div>

        {/* Video Lectures */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "35px 30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
          }}
        >
          <h2 style={{ color: "#0f172a", marginTop: 0, fontSize: "28px" }}>
            🎥 Video Lectures
          </h2>

          <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "16px" }}>
            Watch Electrical and Electronics Engineering lectures on our
            YouTube channel.
          </p>

          <a
            href="https://youtube.com/@study_withneeraj"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              background: "#ef4444",
              color: "white",
              padding: "16px 24px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            ▶ Watch Video Lectures →
          </a>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              border: "none",
              background: "#0f172a",
              color: "white",
              padding: "13px 25px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ← Back to Subjects
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubjectDetails;
