import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import FontIcon from 'material-ui/FontIcon'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import SetTime from './SetTime'

const AppBarComponent = () => (
  <div>
  <AppBar
    title="Dead Line App"
    iconElementRight={<SetTime />}
  />
  </div>
);
export default AppBarComponent
