import { Box, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { TimeLine } from './TimeLine';
import '../../styles/Home.css';

interface Props {
  darkMode: boolean;
}

/**
 * Refer: https://www.npmjs.com/package/react-type-animation
 * Same String at the start will only be typed once, initially
 * Custom Speed from 1-99 - Default Speed: 40
 * Animation will be rendered as a <span>
 * Repeat this Animation Sequence infinitely
 */
export const Home = (props: Props) => {
  const { darkMode } = props;
  return (
    <>
      <>
        <TimeLine />
      </>
      <>
        <img src="/whitecat.jpg" alt="white_cat" id="catImage" loading="eager" />
      </>
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '53%',
          transform: 'translate(-50%,-50%)',
          width: '100vw',
          textAlign: 'justify',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          color={`${darkMode === true ? 'secondary' : 'secondary'}`}
          sx={{ fontWeight: 'bold' }}
        >
          <TypeAnimation
            sequence={['Ayanava Karmakar', 1000]}
            speed={10}
            wrapper="span"
            repeat={0}
          />
        </Typography>
        <Typography
          variant="h5"
          color={`${darkMode === true ? 'secondary' : 'secondary'}`}
          sx={{ fontWeight: 'medium' }}
        >
          <TypeAnimation
            sequence={['⇒ Frontend Developer', 1000]}
            speed={5}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>
        <Typography
          variant="h5"
          color={`${darkMode === true ? 'secondary' : 'secondary'}`}
          sx={{ fontWeight: 'medium' }}
        >
          <TypeAnimation
            sequence={['⇒ Technical Content Writer', 1000]}
            speed={5}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>
        <Typography
          variant="h6"
          color={`${darkMode === true ? 'secondary' : 'secondary'}`}
          sx={{ fontWeight: 'light' }}
        >
          <TypeAnimation
            sequence={['⌂ Based in Kolkata', 1000, '⌂ Based in Kolkata, India', 1000]}
            speed={1}
            wrapper="span"
            repeat={0}
          />
        </Typography>
      </Box>
    </>
  );
};
