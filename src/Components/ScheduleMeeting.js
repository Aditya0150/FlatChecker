import React, { useState } from 'react';
import '../ScheduleMeeting.css'; // Ensure this is imported for styles

const ScheduleMeeting = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Meeting scheduled for ${date} at ${time}`);
    alert(`Meeting scheduled for ${date} at ${time}`);
    setDate('');
    setTime('');
  };

  return (
    <div className="schedule-meeting-container">
      <div className="schedule-meeting">
        <h2>Schedule a Meeting</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button type="submit">Schedule Meeting</button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
