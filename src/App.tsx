import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './Styles/global';
import AppProvider from './hooks';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
