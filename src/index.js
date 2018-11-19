import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animate.css';

import App from './components/app/App.container';
import { BrowserRouter } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducers'
const store = createStore(
   rootReducer,
   applyMiddleware(thunk)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
   , document.getElementById('root')
);
registerServiceWorker();
