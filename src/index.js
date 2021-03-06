import React from 'react';
import './index.css';
import App from './App';

import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";


import 'bootstrap/dist/css/bootstrap.css';



render(
    <Provider store={store}>
      <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  );