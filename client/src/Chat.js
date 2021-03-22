import { createRef, Fragment } from 'react';
import { Container, Grid } from '@material-ui/core';
import ChatForm from './ChatForm.js';
import BubbleGroup from './BubbleGroup.js';

export default function Chat() {
  const bgRef = createRef();

  return (
    <Fragment>
      <Grid
        container
        direction='column-reverse'
        justify='flex-start'
        alignItems='center'
        style={{overflow: 'auto'}}
      >
        <Container maxWidth='lg'>
          <Grid item>
            <BubbleGroup ref={bgRef} />
          </Grid>
          <Grid item>
            <ChatForm bgRef={bgRef} />
          </Grid>
        </Container>
      </Grid>
    </Fragment>
  );
}