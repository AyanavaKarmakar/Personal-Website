import emailjs from '@emailjs/browser';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';

interface Props {
  fullName: string;
  emailId: string;
  message: string;
}

const addMessageToDB = async (templateParams: Props) => {
  const { fullName, emailId, message } = templateParams;
  await addDoc(collection(db, 'messages'), {
    fullName: fullName,
    emailId: emailId,
    message: message,
  }).catch((error: { code: number; message: string }) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`${errorCode} + ${errorMessage}`);
  });
};

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
        addMessageToDB(templateParams);
      }
    },
    err => {
      console.log('FAILED...', err);
    }
  );
};
