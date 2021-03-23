// Sends a message to the server.
function sendMessage(args) {
  const message = args;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({action: 'sendMessage', message: message})
  };
  fetch('http://localhost:3001/messages', requestOptions);
};

// Map from action names to action functions. Used in perform
// for quick and tidy access to functions.
const actions = new Map([
  ['sendMessage', sendMessage]
]);

// Performs given action.
export default function perform(actionName, args) {
  const action = actions.get(actionName);

  if (action !== undefined) {
    action(args);
  } else {
    console.error(`Unknown action: ${actionName}`);
  }
}