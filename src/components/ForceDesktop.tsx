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
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
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
                  <Typography color="secondary"></Typography>Reset Steps?
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
