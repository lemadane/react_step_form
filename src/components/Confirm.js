import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { NEXT_STEP, PREV_STEP } from '../reducer';

export const Confirm = () => {
  const { firstName, lastName, email, occupation, city, bio } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <MuiThemeProvider >
      <React.Fragment>
        <Dialog
          open={true}
          fullWidth={true}
          maxWidth='sm'
        >
          <AppBar title='Confirm User Data' />
          <List>
            <ListItem>
              <ListItemText primary='First Name' secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Last Name' secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Email' secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Occupation' secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary='City' secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Bio' secondary={bio} />
            </ListItem>
          </List>
          <br />

          <Button
            color='secondary'
            variant='contained'
            onClick={() => dispatch({ type: PREV_STEP })}
          >Back</Button>

          <Button
            color='primary'
            variant='contained'
            onClick={() => dispatch({ type: NEXT_STEP })}
          >Confirm and Continue</Button>
        </Dialog>
      </React.Fragment>
    </MuiThemeProvider>
  );
}