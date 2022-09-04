import { Box, Paper, TextField, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

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
    <Paper>
      <Paper sx={{ width: 1, height: 1 }}>
        <img src="/Cat.jpg" alt="white_cat" height="100%" width="100%" />
      </Paper>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '100vw',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          color="secondary"
          variant="outlined"
          defaultValue={}
        />
        <Typography
          variant="h4"
          color={`${darkMode === true ? 'secondary' : '#000000'}`}
          sx={{ fontWeight: 'bold' }}
        >
          <TypeAnimation
            sequence={['Ayanava Karmakar', 1000]}
            speed={50}
            wrapper="span"
            repeat={0}
          />
        </Typography>
        <Typography
          variant="h5"
          color={`${darkMode === true ? 'secondary' : '#00FFFF'}`}
          sx={{ fontWeight: 'medium' }}
        >
          <TypeAnimation
            sequence={['Frontend Developer &', 1000]}
            speed={5}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>
        <Typography
          variant="h5"
          color={`${darkMode === true ? 'secondary' : '#00FFFF'}`}
          sx={{ fontWeight: 'medium' }}
        >
          <TypeAnimation
            sequence={['Technical Content Writer', 1000]}
            speed={5}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>
        <Typography
          variant="h6"
          color={`${darkMode === true ? 'secondary' : '#00FFFF'}`}
          sx={{ fontWeight: 'light' }}
        >
          <TypeAnimation
            sequence={['Based in Kolkata', 1000, 'Based in Kolkata, India', 1000]}
            speed={1}
            wrapper="span"
            repeat={0}
          />
        </Typography>
      </Box>
    </Paper>
  );
};
