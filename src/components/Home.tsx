import { Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

/**
 * Refer: https://www.npmjs.com/package/react-type-animation
 * Same String at the start will only be typed once, initially
 * Custom Speed from 1-99 - Default Speed: 40
 * Animation will be rendered as a <span>
 * Repeat this Animation Sequence infinitely
 */
export const Home = () => {
  return (
    <>
      <Box sx={{ width: '50em' }}>
        <TypeAnimation
          sequence={['Ayanava Karmakar', 1000]}
          speed={50}
          style={{ fontSize: '2em' }}
          wrapper="span"
          repeat={0}
        />
      </Box>
      <Box sx={{ width: '50em' }}>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            1000,
            'Frontend Developer | Technical Content Writer.',
            1000,
          ]}
          speed={10}
          style={{ fontSize: '2em' }}
          wrapper="span"
          repeat={Infinity}
        />
      </Box>
      <Box sx={{ width: '50em' }}>
        <TypeAnimation
          sequence={['Based in Kolkata', 1000, 'Based in Kolkata, India', 1000]}
          speed={1}
          style={{ fontSize: '2em' }}
          wrapper="span"
          repeat={0}
        />
      </Box>
    </>
  );
};
