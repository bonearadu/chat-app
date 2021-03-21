import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

const userId = 'user';
const submitId = 'submit';

function UsernameForm() {
  const [username, setUsername] = React.useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleChange = event => {
    setUsername(event.target.value);
  }

  return(
    <form
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <TextField id={userId} label='User Name' defaultValue='' />
        </Grid>
        <br />
        <Grid item>
          <Button
            id={submitId}
            type='submit'
            variant='contained'
            color='primary'
            href={`/chat?${userId}=${username}`}
            disabled={username === '' ? true : false}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default function Home() {
  return(
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