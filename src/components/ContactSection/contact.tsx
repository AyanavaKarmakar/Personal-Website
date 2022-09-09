import { FormControl, InputLabel, Input } from '@mui/material';

/**
 * Refer = https://mui.com/material-ui/api/form-control/
 */
export const Contact = () => {
  return (
    <FormControl sx={{ my: 2, mx: 1 }}>
      <InputLabel htmlFor="emailId">Email ID</InputLabel>
      <Input
        required={true}
        fullWidth={true}
        autoFocus={true}
        error={false}
        color="primary"
        id="emailId"
        name="emailId"
        placeholder={'Enter your Email Id here'}
      />
    </FormControl>
  );
};
