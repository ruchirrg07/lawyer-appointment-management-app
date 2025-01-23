import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookAppointment from "./components/BookAppointment";
import AppointmentHistory from "./components/AppointmentHistory";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/history" element={<AppointmentHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
