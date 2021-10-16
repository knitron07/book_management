import React from 'react';
import ReactDOM from 'react-dom';
import './_Index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthContextProvider } from './Context/AuthContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#1abc9c',
    },
  },
  typography: {
    poster: {
      color: 'white',
    },
    black: {
      color: 'black',
    },
    fontFamily: 'Montserrat',
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
