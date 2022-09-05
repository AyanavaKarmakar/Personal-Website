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
      <img src="/whitecat.jpg" alt="white_cat" id="catImage" loading="eager" />
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
