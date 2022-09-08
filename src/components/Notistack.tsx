import { AlertProps, Snackbar, Typography } from '@mui/material';
import { forwardRef, SyntheticEvent, useEffect, useState } from 'react';
import MuiAlert from '@mui/material/Alert';

interface Props {
  darkMode: boolean;
  activateSnackDownComponent: boolean;
}

/**
 * Ref: https://mui.com/material-ui/react-snackbar/#customization
 */
export const Notistack = (props: Props) => {
  const { darkMode, activateSnackDownComponent } = props;

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [activateSnackDownComponent]);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={darkMode === true ? 'warning' : 'info'}
        sx={{ width: '100%' }}
      >
        <Typography>
          {`The theme has been set to ${darkMode === true ? 'EXPERIMENTAL' : 'DEFAULT'}!`}
        </Typography>
      </Alert>
    </Snackbar>
  );
};