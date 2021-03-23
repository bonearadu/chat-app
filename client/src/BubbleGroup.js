import { Component, Fragment } from "react";
import ChatBubble from "./ChatBubble";

// Renders ChatBubbles for all the messages in its state.
export default class BubbleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages || []
    }
  }

  render() {
    const bubbles = this.state.messages.map(
      message => <ChatBubble user={message.user} content={message.content} />);

    return (
      <Fragment>
        {bubbles}
      </Fragment>
    );
  }
}