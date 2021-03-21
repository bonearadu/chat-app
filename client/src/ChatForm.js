import { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const messageId = 'message';
const sendId = 'send';

// Form for submitting a message to the chat.
export default function ChatForm() {
  const [text, setText] = useState('');
  const user = new URLSearchParams(window.location.search).get('user');

  const handleSubmit = event => {
    event.preventDefault();
    document.getElementById(messageId).value = '';
    alert(`${user}: ${text}`);
    setText('');
  };

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <form
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={11}>
          <TextField
            id={messageId}
            variant='outlined'
            fullWidth
            multiline
            label='Message'
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            id={sendId}
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            fullWidth
            disabled={text === '' ? true : false}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}