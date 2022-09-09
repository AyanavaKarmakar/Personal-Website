import { useState, useEffect } from 'react';
import { Box, Zoom } from '@mui/material';
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
    <>
      <Box sx={{ height: 180 }}>
        <Box sx={{ display: 'flex' }}>
          <Zoom in={load}>{ContactForm({ darkMode })}</Zoom>
        </Box>
      </Box>
      <Box sx={{ mx: 50, my: -20 }}>
        <ContactAnimation />
      </Box>
    </>
  );
};
