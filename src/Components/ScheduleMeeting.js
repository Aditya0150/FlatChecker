import React, { useState } from 'react';
import '../ScheduleMeeting.css'; // Ensure this is imported for styles

const ScheduleMeeting = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(''); // Track error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear any previous errors

    const meetingDetails = {
      date,
      time,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/schedule/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meetingDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to schedule meeting');
      }

      const data = await response.json();
      console.log(`Meeting scheduled successfully:`, data);
      alert(`Meeting scheduled successfully for ${date} at ${time}`);
      setDate('');
      setTime('');
    } catch (err) {
      console.error(err);
      setError('Failed to schedule meeting. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="schedule-meeting-container">
      <div className="schedule-meeting">
        <h2>Schedule a Meeting</h2>
        {error && <p className="error-message">{error}</p>}
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
          <button type="submit" disabled={loading}>
            {loading ? 'Scheduling...' : 'Schedule Meeting'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
