import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="xDBZevxEEl4hcCdxmqzJW5ME30zhU8uavdZIt3Ft" serverUrl="https://1f5cmtlegnz1.usemoralis.com:2053/server">
          <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//0x3406965957385F420D37ef7b86b2001c30e7F375
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
