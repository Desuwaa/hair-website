// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail.com', // e.g., 'gmail'
    auth: {
        user: '',
        pass: '',
    },
    });

    // Define the email content
    const mailOptions = {
    from: '',
    to: '',
    subject: 'Test Email',
    text: 'This is a test email from Node.js',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
    });