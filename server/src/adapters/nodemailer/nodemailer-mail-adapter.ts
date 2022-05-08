import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1fbe1dc2a15834",
    pass: "6f9b2eb38a1e7e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedback.com>",
      to: "Lucas Cavalcante <lucas-cavalcante-2@hotmail.com",
      subject,
      html: body,
    });
  }
}
