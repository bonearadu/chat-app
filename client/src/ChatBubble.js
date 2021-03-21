import { Divider, Typography } from "@material-ui/core";
import { Fragment } from "react";

export default function ChatBubble({ user, content }) {
  return(
    <Fragment>
      <Typography color='textSecondary'>{user}</Typography>
      <Typography variant='h6'>{content}</Typography>
      <Divider />
      <br />
    </Fragment>
  );
}