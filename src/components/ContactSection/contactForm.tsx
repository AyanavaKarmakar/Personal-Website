import { useState } from 'react';
import { FormControl, Stack, TextField, Typography } from '@mui/material';

interface Props {
  darkMode: boolean;
}

/**
 * Refer: https://mui.com/material-ui/react-text-field/#components
 */
export const ContactForm = (props: Props) => {
  const { darkMode } = props;

  const [credentials, setCredentials] = useState({ fullName: '', emailId: '', message: '' });

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '85vh' }}
      component="form"
      noValidate
      autoComplete="off"
      sx={{ mx: 10 }}
    >
      <Typography
        gutterBottom
        variant="h2"
        color={`${darkMode === true ? 'secondary' : 'primary'}`}
      >
        Contact Me!
      </Typography>
      <FormControl fullWidth>
        <TextField
          autoFocus
          fullWidth
          color={`${darkMode === true ? 'secondary' : 'primary'}`}
          id="fullName"
          label="Your Full Name"
          variant="outlined"
          placeholder="Enter your full name here"
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          color={`${darkMode === true ? 'secondary' : 'primary'}`}
          id="emailId"
          label="Your Email"
          variant="outlined"
          placeholder="Enter your email id here"
          sx={{ my: 1 }}
        />
        <TextField
          multiline
          fullWidth
          color={`${darkMode === true ? 'secondary' : 'primary'}`}
          rows={10}
          id="message"
          label="Your Message"
          variant="outlined"
          placeholder="Enter your message here"
          sx={{ my: 1 }}
        />
      </FormControl>
    </Stack>
  );
};
