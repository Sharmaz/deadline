import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarComponent from './components/AppBar';
import CardTime from './components/Card';

const AppBar = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AppBarComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <AppBar />,
  document.getElementById('container')
);

const Card = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <CardTime />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Card />,
  document.getElementById('card')
);
