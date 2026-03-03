import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

});

const sendEmail = async (lead) => {

  await transporter.sendMail({

    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,

    subject: "🚀 New Project Lead - Nirspace",

    html: `
      <h2>New Client Inquiry</h2>

      <p><b>Name:</b> ${lead.name}</p>
      <p><b>Email:</b> ${lead.email}</p>
      <p><b>Budget:</b> ${lead.budget}</p>
      <p><b>Project:</b> ${lead.project}</p>
    `,
  });

};

export default sendEmail;