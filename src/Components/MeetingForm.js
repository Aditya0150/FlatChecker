// /client/src/components/ScheduleMeetingForm.js
import React, { useState } from 'react';

function ScheduleMeetingForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [inspectorEmail, setInspectorEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meetingData = {
      title,
      date,
      clientEmail,
      inspectorEmail,
    };

    try {
      const response = await fetch('http://localhost:3001/api/schedule-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meetingData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Meeting scheduled successfully');
        console.log(result);
      } else {
        alert('Error scheduling meeting');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Client Email:</label>
        <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required />
      </div>
      <div>
        <label>Inspector Email:</label>
        <input type="email" value={inspectorEmail} onChange={(e) => setInspectorEmail(e.target.value)} required />
      </div>
      <button type="submit">Schedule Meeting</button>
    </form>
  );
}

export default ScheduleMeetingForm;
