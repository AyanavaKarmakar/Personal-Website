import { useState, useEffect } from 'react';
import { Box, Grid, Zoom } from '@mui/material';
import { ContactForm, ContactAnimation } from './index';

interface Props {
  darkMode: boolean;
}

/**
 * Ref = https://mui.com/material-ui/transitions/
 */
export const ContactTransition = (props: Props) => {
  const { darkMode } = props;
  const [load, setLoad] = useState(false);

  const handleChange = () => {
    setLoad(true);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      sx={{ mx: 10 }}
    >
      <Box sx={{ height: 180 }}>
        <Box sx={{ display: 'flex' }}>
          <Zoom in={load}>{ContactForm({ darkMode })}</Zoom>
        </Box>
      </Box>
      <Box sx={{ mx: 25, my: -30 }}>
        <ContactAnimation />
      </Box>
    </Grid>
  );
};
