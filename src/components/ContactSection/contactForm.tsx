import { useState } from 'react';
import { Button, FormControl, Stack, TextField, Typography } from '@mui/material';
import { EmailHandler } from './index';

interface Props {
  darkMode: boolean;
}

/**
 * Refer: https://mui.com/material-ui/react-text-field/#components
 */
export const ContactForm = (props: Props) => {
  const { darkMode } = props;

  const [credentials, setCredentials] = useState({ fullName: '', emailId: '', message: '' });

  const handleOnChange = (e: {
    preventDefault: () => void;
    target: { name: string; value: string };
  }) => {
    e.preventDefault();

    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    EmailHandler({
      fullName: credentials.fullName,
      emailId: credentials.emailId,
      message: credentials.message,
    });

    /**
     * Resets imput fields
     */
    setCredentials({ fullName: '', emailId: '', message: '' });
  };

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
          required
          color={`${darkMode === true ? 'secondary' : 'primary'}`}
          id="fullName"
          name="fullName"
          label="Your Full Name"
          variant="outlined"
          placeholder="Enter your full name here"
          sx={{ my: 1 }}
          onChange={handleOnChange}
          value={credentials.fullName}
        />
        <TextField
          fullWidth
          required
          color={`${darkMode === true ? 'secondary' : 'primary'}`}
          id="emailId"
          name="emailId"
          label="Your Email"
          variant="outlined"
          placeholder="Enter your email id here"
          sx={{ my: 1 }}
          onChange={handleOnChange}
          value={credentials.emailId}
        />
        <TextField
          multiline
          fullWidth
          required
          color={`${darkMode === true ? 'secondary' : 'primary'}`}
          rows={10}
          id="message"
          name="message"
          label="Your Message"
          variant="outlined"
          placeholder="Enter your message here"
          sx={{ my: 1 }}
          onChange={handleOnChange}
          value={credentials.message}
        />
      </FormControl>
      <Button
        onClick={handleSubmit}
        fullWidth
        color={`${darkMode === true ? 'secondary' : 'primary'}`}
        variant="outlined"
      >
        Send Message
      </Button>
    </Stack>
  );
};
