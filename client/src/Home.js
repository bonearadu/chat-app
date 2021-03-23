import { Grid, Typography } from '@material-ui/core';
import UsernameForm from './UsernameForm.js';

// Main component to be rendered on the home page.
export default function Home() {
  return (
    <Grid
      container
      direction='column'
      justify='space-evenly'
      alignItems='center'
    >
      <Grid item><Typography variant='h1'>Welcome!</Typography></Grid>
      <Grid item>
        <UsernameForm />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}