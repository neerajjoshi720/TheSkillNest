import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import SubjectDetails from "./pages/SubjectDetails/SubjectDetails";

import Notes from "./pages/Notes/Notes";
import AIAssistant from "./pages/AIAssistant/AIAssistant";
import YouTube from "./pages/YouTube/YouTube";
import Facebook from "./pages/Facebook/Facebook";
import Contact from "./pages/Contact/Contact";


function AppContent() {

  const location = useLocation();

  return (
    <>
      <Navbar />


      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* Courses */}
        <Route
          path="/courses"
          element={<Courses />}
        />


        {/* Course Details */}
        <Route
          path="/courses/:courseName"
          element={<CourseDetails />}
        />


        {/* Subject Details */}
        <Route
          path="/subject/:subjectName"
          element={<SubjectDetails />}
        />


        {/* Notes */}
        <Route
          path="/notes"
          element={<Notes />}
        />


        {/* AI Assistant */}
        <Route
          path="/ai-assistant"
          element={<AIAssistant />}
        />


        {/* YouTube */}
        <Route
          path="/youtube"
          element={<YouTube />}
        />


        {/* Facebook */}
        <Route
          path="/facebook"
          element={<Facebook />}
        />


        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>


      {/* Footer Only Home Page */}
      {location.pathname === "/" && <Footer />}

    </>
  );
}



function App() {

  return (
    <BrowserRouter>

      <AppContent />

    </BrowserRouter>
  );

}


export default App;