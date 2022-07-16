import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './components/globalStyle/GlobalStyle';
import UserStoreProvider from './store/userStore/userStoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <UserStoreProvider>
        <App />
      </UserStoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
