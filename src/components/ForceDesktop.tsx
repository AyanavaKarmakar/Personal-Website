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

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ color: '#1F2022', backgroundColor: '#1F2022' }}
    >
      <Box sx={{ maxWidth: 200 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography color="secondary">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography color="secondary">{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="outlined"
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
          <Paper square elevation={0} sx={{ p: 3, backgroundColor: '#000000' }}>
            {isViewedOnDesktop === false && (
              <>
                <Typography color="secondary">Reload this page to proceed!</Typography>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  <Typography color="secondary">Reset Steps?</Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleNavigate}
                  sx={{ mt: 1, mr: 1 }}
                >
                  <Typography color="secondary">Reload Page?</Typography>
                </Button>
              </>
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