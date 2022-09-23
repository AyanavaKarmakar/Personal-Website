import ReactLoading from 'react-loading';

interface Props {
  darkMode: boolean;
}

/**
 * @see https://gsithub.com/fakiolinho/react-loading#readme
 */
export const LogoAnimation = (props: Props) => {
  const { darkMode } = props;
  return <ReactLoading type={`${darkMode === true ? 'balls' : 'bubbles'}`} color={'#E0FFFF'} />;
};
