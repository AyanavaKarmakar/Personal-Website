import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isViewedOnDesktop: boolean;
  setIsViewedOnDesktop: Dispatch<SetStateAction<boolean>>;
}

/**
 * Ref = https://mui.com/material-ui/react-stepper/#vertical-stepper
 */
const steps = [
  {
    label: 'Why am I here?',
    description: `You have attempted to view this page on your phone.`,
  },
  {
    label: 'Why am I blocked from viewing this page on my phone?',
    description: 'The site needs to be viewed on desktop mode for best user experience.',
  },
  {
    label: 'What should I do now?',
    description: `Please view this
                  site on your desktop / laptop.
                  Alternatively, turn on desktop
                  mode on your mobile.`,
  },
];

export const ForceDesktop = (props: Props) => {
  const { isViewedOnDesktop, setIsViewedOnDesktop } = props;
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNavigate = () => {
    setIsViewedOnDesktop(true);
    navigate('/home');
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ color: '#1F2022', backgroundColor: '#1F2022' }}
    >
      <Box sx={{ maxWidth: 300 }}>
        <Typography variant="h2" color="secondary" sx={{ my: 2, fontWeight: 'bold' }}>
          Oops!
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography color="secondary" variant="h6" sx={{ my: 1, fontWeight: 'bold' }}>
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography color="secondary">{step.description}</Typography>
                <Box sx={{ my: 1, mb: 2 }}>
                  <div>
                    <Button
                      variant="outlined"
                      size="large"
                      color="secondary"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      color="secondary"
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      <Typography color="secondary"></Typography>Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper
            elevation={24}
            sx={{
              p: 3,
              backgroundColor: '#1F2022',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isViewedOnDesktop === false && (
              <Box justifyContent="center" alignItems="center">
                <Typography variant="h6" color="secondary" sx={{ mx: 6, my: 1 }}>
                  Reload this page to proceed...
                </Typography>
                <Button
                  color="warning"
                  variant="outlined"
                  onClick={handleReset}
                  sx={{ mx: 6, my: 2 }}
                >
                  <Typography color="warning" sx={{ my: 1 }}>
                    Reset Steps
                  </Typography>
                </Button>
                <Typography color="secondary" variant="h6" sx={{ mx: 6, my: 1 }}>
                  Still stuck here?
                </Typography>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleReload}
                  sx={{ mx: 6, my: 2 }}
                >
                  <Typography color="error" sx={{ my: 1 }}>
                    Force Reload
                  </Typography>
                </Button>
              </Box>
            )}
            {
              /**
               * Incase someone tries to bypass
               */
              isViewedOnDesktop === true && (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                  <Typography color="secondary">
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button color="secondary" onClick={handleNavigate} sx={{ mt: 1, mr: 1 }}>
                    <Typography color="secondary"></Typography>Proceed
                  </Button>
                </Box>
              )
            }
          </Paper>
        )}
      </Box>
    </Box>
  );
};
