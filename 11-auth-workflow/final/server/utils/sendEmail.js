const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  console.log('transporter', transporter);
  return transporter.sendMail({
    from: '"Coding Addict" <mr.linh1090@gmail.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
