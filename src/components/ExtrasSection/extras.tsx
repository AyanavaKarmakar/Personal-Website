import { Grid, Typography } from '@mui/material';

interface Props {
  darkMode: boolean;
}

export const Extras = (props: Props) => {
  const { darkMode } = props;

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '85vh' }}
    >
      <Typography variant="h2" color={`${darkMode === true ? 'secondary' : 'primary'}`}>
        Coming Soon!
      </Typography>
    </Grid>
  );
};
