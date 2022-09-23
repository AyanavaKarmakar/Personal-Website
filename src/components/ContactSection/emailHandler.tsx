import emailjs from '@emailjs/browser';

interface Props {
  fullName: string;
  emailId: string;
  message: string;
}

/**
 * @see https://www.npmjs.com/package/@emailjs/browser
 */
export const EmailHandler = (props: Props) => {
  const SERVICE_ID = 'service_kyj427g';
  const TEMPLATE_ID = 'template_mituj0j';
  const PUBLIC_KEY = 'eyYp85-Sud5mls1gM';

  const { fullName, emailId, message } = props;

  const templateParams = {
    fullName: fullName,
    emailId: emailId,
    message: message,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    response => {
      /**
       * response.status === 200 if successfull
       */
      if (response.status === 200) {
        alert(`Hi, ${fullName}! Your message has been sent successfully!`);
      }
    },
    err => {
      console.log('FAILED...', err);
    }
  );
};
