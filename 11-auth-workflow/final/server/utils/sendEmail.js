const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);

    const mailOptions = {
      from: '"Coding Addict" <mr.linh1090@gmail.com>', // sender address
      to,
      subject,
      html,
    };

    const info = transporter.sendMail(mailOptions);
    return info;
    
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
