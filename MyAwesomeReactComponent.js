import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const MyAwesomeReactComponent = () => (
  <AppBar 
    title="Dead Line App"
    iconElementRight={<IconButton iconClassName="material-icons">person</IconButton>}
  />

);
export default MyAwesomeReactComponent;
