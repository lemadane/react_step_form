import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export const Success = () => {
  return (
    <MuiThemeProvider >
      <React.Fragment>
        <Dialog
          open={true}
          fullWidth={true}
          maxWidth='sm'
        >
          <AppBar position='static' title='Success' />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </Dialog>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
