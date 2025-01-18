const Meeting = require('../models/Meeting');
const nodemailer = require('nodemailer');

const scheduleMeeting = async (req, res) => {
  const { title, date, clientEmail, inspectorEmail } = req.body;

  try {
    const meeting = new Meeting({
      title,
      date,
      clientEmail,
      inspectorEmail,
      meetingLink: `https://your-meeting-link.com/${new Date().getTime()}`,
    });

    await meeting.save(); // Save the meeting to the database

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `${clientEmail}, ${inspectorEmail}`,
      subject: 'Flat Inspection Meeting Scheduled',
      text: `Your meeting is scheduled. Link: ${meeting.meetingLink}`,
    };

    // Send emails to client and inspector
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Meeting scheduled successfully', meeting });
  } catch (error) {
    res.status(500).json({ error: 'Failed to schedule meeting' });
  }
};

module.exports = { scheduleMeeting };
