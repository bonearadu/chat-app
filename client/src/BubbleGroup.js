import { Fragment } from "react";
import ChatBubble from "./ChatBubble";

export default function BubbleGroup({ messages }) {
  messages = messages || [];
  
  var bubbles = messages.map(
    message => <ChatBubble user={message.user} content={message.content} />);
  
  return(
    <Fragment>
      {bubbles}
    </Fragment>
  );
}