import { Fragment } from 'react';
import { Container, Grid } from '@material-ui/core';
import ChatForm from './ChatForm.js';
import BubbleGroup from './BubbleGroup.js';

export default function Chat() {
  return (
    <Fragment>
      <Grid
        container
        direction='column-reverse'
        justify='flex-start'
        alignItems='center'
      >
        <Container maxWidth='lg'>
          <BubbleGroup />
          <br />
          <ChatForm />
        </Container>
      </Grid>
    </Fragment>
  );
}