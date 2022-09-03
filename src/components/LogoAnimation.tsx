import ReactLoading from 'react-loading';

/**
 * Adapted from react-loading
 * Refer: https://gsithub.com/fakiolinho/react-loading#readme
 * Loading animation types used here:
 * 1. bars
 * 2. bubbles
 * 3. cylon
 */
export const LogoAnimation = () => {
  return <ReactLoading type={'bubbles'} color={'#4db5ff'} />;
};
