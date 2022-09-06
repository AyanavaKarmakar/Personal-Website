import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 * Refer: https://mui.com/material-ui/api/circular-progress/
 */
function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" component="div" sx={{ color: '#E0FFFF' }}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const LandingPageLoadingAnimation = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 20));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#1F2022' }}
    >
      <CircularProgressWithLabel value={progress} size={250} thickness={5} color="secondary" />
    </Box>
  );
};
