import { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

// Form for entering a username and connecting to the chat.
export default function UsernameForm() {
  const userId = 'user';
  const submitId = 'submit';
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleChange = event => {
    setUsername(event.target.value);
  }

  return (
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