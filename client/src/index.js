import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './Chat.js';
import Home from './Home.js';

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