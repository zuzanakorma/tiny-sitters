const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

async function main() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Genesis Foo 👻" <tinysittersgenesis@gmail.com>', // sender address
    to: 'zuzana.kormancova@appliedtechnology.se', // list of receivers
    subject: 'Hello GenesisTeam', // Subject line
    text: 'TinySitters Here', // plain text body
    html: '<b>TinySitters Here</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
