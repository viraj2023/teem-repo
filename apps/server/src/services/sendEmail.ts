import { transporter } from "../config/nodemailer";

interface SendEmailProps {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: SendEmailProps) => {
  return transporter.sendMail({
    from: "TEEM App <krishrupapara@zohomail.in>",
    to: to,
    subject,
    html,
  });
};
