import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Typography, Box } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ForceDesktop } from './ForceDesktop';

interface Props {
  isViewedOnDesktop: boolean;
  setIsViewedOnDesktop: Dispatch<SetStateAction<boolean>>;
}

/**
 * Refer = https://mui.com/material-ui/api/circular-progress/
 * Refer = https://reactrouter.com/en/main/hooks/use-navigate#usenavigate
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
        <Typography variant="h3" component="div" color="error">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const ForceDesktopUnloading = (props: Props) => {
  const { isViewedOnDesktop, setIsViewedOnDesktop } = props;
  const [progress, setProgress] = useState<number>(100);
  const [showStepper, setShowStepper] = useState(false);
  const DELAY_MS = 500;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress <= 0 ? 100 : prevProgress - 20));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 0) {
      setTimeout(() => {
        setShowStepper(true);
      }, DELAY_MS);
    }
  }, [progress]);

  return (
    <>
      {showStepper === false && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ backgroundColor: '#1F2022' }}
        >
          <CircularProgressWithLabel value={progress} size={250} thickness={5} color="error" />
        </Box>
      )}
      {showStepper === true && (
        <ForceDesktop
          isViewedOnDesktop={isViewedOnDesktop}
          setIsViewedOnDesktop={setIsViewedOnDesktop}
        />
      )}
    </>
  );
};
