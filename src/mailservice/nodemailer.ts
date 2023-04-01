import { EMAIL } from '../utils/secrets';
import verifyEmail from '../templates/verifyEmailTemplate';
import MessageBack from '../templates/messageEmailTemplate';

interface EmailInfo {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

function sendConfirmationEmail(
  transporter: any,
  message: string,
  email: string,
  name: string
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const otp = message;
    const emailTemplate = verifyEmail(otp);
    transporter.sendMail(
      {
        from: EMAIL,
        to: email,
        subject: 'Confirmation Email',
        text: emailTemplate.text,
        html: emailTemplate.html,
      } as EmailInfo,
      (error: any, info: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      }
    );
  });
}

function sendMessageback(
  transporter: any,
  message: string,
  email: string,
  name: string
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const otp = message;
    const firstname = name;
    const emailTemplate = MessageBack(otp, firstname);
    transporter.sendMail(
      {
        from: EMAIL,
        to: EMAIL,
        subject: 'Confirmation Email',
        text: emailTemplate.text,
        html: emailTemplate.html,
      } as EmailInfo,
      (error: any, info: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      }
    );
  });
}

export { sendConfirmationEmail, sendMessageback };
