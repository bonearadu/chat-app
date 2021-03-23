import { createRef, Fragment } from 'react';
import { Container, Grid } from '@material-ui/core';
import { io } from 'socket.io-client';
import ChatForm from './ChatForm.js';
import BubbleGroup from './BubbleGroup.js';

// Main component to be rendered on the /chat page.
export default function Chat() {
  const bgRef = createRef();

  // Connect to the server using socket.io.
  const socket = io('http://localhost:3001');
  // Load messages from the board.
  socket.on('loadMessages', messages => {
    bgRef.current.setState({ messages: messages });
  })
  // Update messages in the bubble group when
  // a new message is submitted to the board.
  socket.on('message', message => {
    const bubbleGroup = bgRef.current;
    const messages = bubbleGroup.state.messages;
    messages.push(message);
    bubbleGroup.setState({ messages: messages });
  });

  return (
    <Fragment>
      <Grid
        container
        direction='column-reverse'
        justify='flex-start'
        alignItems='center'
        style={{ overflow: 'auto' }}
      >
        <Container maxWidth='lg'>
          <Grid item>
            <BubbleGroup ref={bgRef} />
          </Grid>
          <Grid item>
            <ChatForm />
          </Grid>
        </Container>
      </Grid>
    </Fragment>
  );
}