import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from '../src/components/App';
import rootReducer from './reducers';

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("ACTION_TYPE= ", action.type);
//       next(action);
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log("ACTION_TYPE= ", action.type);
  }
  next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

console.log("Store", store);

export const StoreContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </React.StrictMode>
);

