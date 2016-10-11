import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'


export default class SetTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false,}
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({open: true})
  };

  handleClose() {
    this.setState({open: false})
  };

render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <IconButton iconClassName="material-icons modal-icon" onTouchTap={this.handleOpen}>add</IconButton>
        <Dialog
          title="Deadline"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Escribe el nombre de tu deadline.
          <TextField hintText="Nombre"/>
          <br />
          Elige la fecha y hora limite.
          <DatePicker hintText="Fecha" />
          <TimePicker hintText="Hora" />
        </Dialog>
      </div>
    );
  }
}