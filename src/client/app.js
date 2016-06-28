import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarComponent from './components/AppBar';
import CardTime from './components/Card';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
    <AppBarComponent />
    <CardTime />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
