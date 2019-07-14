import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SelectTime from './SelectTime'


class AlertDialog extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        open: false,
        time: null
      };
}
      handleClickOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

      myCallback = (dataFromChild) => {
          this.setState({ time: dataFromChild });
      };

      render() {
        console.log();
          return (
            <div>
              <h1 onClick={this.handleClickOpen}> {this.props.date} </h1>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
              <DialogTitle id="alert-dialog-title"> {this.props.date} </DialogTitle>
              <SelectTime
                callbackFromParent={this.myCallback}
                />

              </Dialog>
            </div>
          );
        }
      }


export default AlertDialog;
