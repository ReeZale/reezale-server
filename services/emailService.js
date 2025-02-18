const nodemailer = require("nodemailer");

// 🔥 Create an email transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Change to your email provider (Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

// 🔥 Function to send an email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Email send error:", error);
  }
};

module.exports = { sendEmail };
