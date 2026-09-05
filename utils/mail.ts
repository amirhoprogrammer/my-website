import nodemailer from "nodemailer";

interface MailData {
  name: string;
  familyname: string;
  email: string;
  message: string;
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail({ name, familyname, email, message }: MailData) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `پیام جدید از ${name} ${familyname}`,
    html: `
      <h3>پیام جدید از سایت</h3>
      <p><strong>نام:</strong> ${name}</p>
      <p><strong>نام خانوادگی:</strong> ${familyname}</p>
      <p><strong>ایمیل:</strong> ${email}</p>
      <p><strong>پیام:</strong></p>
      <p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
