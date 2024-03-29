import '~node_modules/modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <ReduxProvider store={store}>
  //   <BrowserRouter basename="/Money-Guard">
  <App />
  //   </BrowserRouter>
  //   </ReduxProvider>
);
