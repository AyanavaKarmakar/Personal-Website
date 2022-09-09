import { SMTPClient } from 'emailjs';

interface Props {
  fullName: string;
  emailId: string;
  message: string;
}

/**
 * Refer = https://www.npmjs.com/package/emailjs
 */

const client = new SMTPClient({
  user: 'user',
  password: 'password',
  host: 'smtp.your-email.com',
  ssl: true,
});

export const EmailHandler = async (props: Props) => {
  const { fullName, emailId, message } = props;
  console.log(fullName);
  console.log(emailId);
  console.log(message);

  try {
    const message = await client.sendAsync({
      text: 'i hope this works',
      from: 'you <username@your-email.com>',
      to: 'someone <someone@your-email.com>, another <another@your-email.com>',
      cc: 'else <else@your-email.com>',
      subject: 'testing emailjs',
    });
    console.log(message);
  } catch (err) {
    console.error(err);
  }
};
