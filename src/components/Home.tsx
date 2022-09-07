import { Box } from '@mui/material';
import { TimeLineTransition } from './TimeLineTransition';
import { TypingAnimation } from './TypingAnimation';
import '../../styles/Home.css';

interface Props {
  darkMode: boolean;
}

export const Home = (props: Props) => {
  const { darkMode } = props;
  return (
    <>
      <img src="https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2Fwhitecat.jpg?s=05ee2ff55a00108cd4e50a3285856c42" alt="white_cat" id="catImage" loading="eager" />
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '82%',
          transform: 'translate(-50%,-50%)',
          width: '100vw',
          textAlign: 'justify',
          zIndex: 1,
        }}
      >
        <TimeLineTransition darkMode={darkMode} />
      </Box>
      <TypingAnimation darkMode={darkMode} />
    </>
  );
};
