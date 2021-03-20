import ReactDOM from 'react-dom';

function Hello() {
  return(
    <p>Hello, World!</p>
  );
}

ReactDOM.render(
  <Hello />, 
  document.getElementById("root")
);