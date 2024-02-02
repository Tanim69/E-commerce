const nodemailer = require("nodemailer");


async function sendEmail(email,subject,template) {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {

      user: "tanimkhan469@gmail.com",
      pass: "iaopjzhyvxkvutal",
    },
  });


  const info = await transporter.sendMail({
    from: 'OREBI', // sender address
    to: email, // list of receivers
    subject:subject,
    html: template, // html body
  });




}

module.exports = sendEmail;