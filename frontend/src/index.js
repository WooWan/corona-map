import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rest from "./service/rest";

const rest = new Rest();

ReactDOM.render(
  <React.StrictMode>
    <App  rest={rest}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
