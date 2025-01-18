import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './HomePage';
import ContactUs from './Components/ContactUs';
import ScheduleMeeting from './Components/ScheduleMeeting';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/schedule" element={<ScheduleMeeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
