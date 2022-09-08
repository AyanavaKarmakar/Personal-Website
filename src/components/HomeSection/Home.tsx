import Imgix from 'react-imgix';
import { Box } from '@mui/material';
import { TimeLineTransition, TypingAnimation } from './index';

interface Props {
  darkMode: boolean;
}

export const Home = (props: Props) => {
  const { darkMode } = props;
  const BACKGROUND_IMG = 'https://wallpapercave.com/wp/wp4871855.jpg';

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        minWidth="100vw"
        sx={{ backgroundColor: '#000000' }}
      >
        <Imgix src={BACKGROUND_IMG} sizes={'100vh'} />
      </Box>
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
