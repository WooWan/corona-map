import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rest from "./service/rest";
import {RecoilRoot} from "recoil";

const rest = new Rest();

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
          <App  rest={rest}/>
      </RecoilRoot>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
