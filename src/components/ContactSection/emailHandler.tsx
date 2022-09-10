import emailjs from '@emailjs/browser';

interface Props {
  fullName: string;
  emailId: string;
  message: string;
}

/**
 * Refer = https://www.npmjs.com/package/@emailjs/browser
 */
export const EmailHandler = (props: Props) => {
  const SERVICE_ID = 'service_kyj427g';
  const TEMPLATE_ID = 'template_mituj0j';
  const PUBLIC_KEY = 'eyYp85-Sud5mls1gM';

  const { fullName, emailId, message } = props;

  const templateParams = {
    fullName: fullName,
    emailID: emailId,
    message: message,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    response => {
      console.log('SUCCESS!', response.status, response.text);
    },
    err => {
      console.log('FAILED...', err);
    }
  );
};
