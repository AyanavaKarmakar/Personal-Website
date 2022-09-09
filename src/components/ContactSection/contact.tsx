import { useEffect, useState } from 'react';
import { ContactForm, ContactFormLoader } from './index';

interface Props {
  darkMode: boolean;
}

export const Contact = (props: Props) => {
  const { darkMode } = props;

  const [isLoading, setIsLoading] = useState(true);
  const DELAY_MS = 1500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      return () => {
        clearTimeout(timer);
      };
    }, DELAY_MS);
  }, []);

  return (
    <>
      {isLoading === true && <ContactFormLoader />}
      {isLoading === false && <ContactForm darkMode={darkMode} />}
    </>
  );
};
