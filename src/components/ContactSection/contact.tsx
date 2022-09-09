import { ContactForm } from './index';

interface Props {
  darkMode: boolean;
}

export const Contact = (props: Props) => {
  const { darkMode } = props;

  return (
    <>
      <ContactForm darkMode={darkMode} />
    </>
  );
};
