import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './Store.js';
import { Counter } from './Count';
import { Cartdata } from './Cartdata.jsx';
import { Cartproduct } from './Cartproduct.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Nav } from './Nav.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      {/* <Route path="/" element={<Nav />} >
      <Route index element={<Cartdata />} /> */}
      <Route path="/" element={<Cartdata />} />
      <Route path="data1" element={<Cartproduct />} />
    
    
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Cartproduct /> */}
    {/* <Cartdata /> */}
    
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
