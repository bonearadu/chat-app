import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './Chat.js';
import Home from './Home.js';
import './style.css';

// Handles routing for the front end of the app.
function PageManager() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <PageManager />,
  document.getElementById("root")
);