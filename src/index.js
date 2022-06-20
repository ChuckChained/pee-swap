import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import configureStore from './store/configureStore';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'

//const store = configureStore()

ReactDOM.render(
  	<Provider store={configureStore()}>
    	<App />
  	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister()