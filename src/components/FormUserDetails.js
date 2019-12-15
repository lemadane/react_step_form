import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { FIRSTNAME_CHANGE, LASTNAME_CHANGE, EMAIL_CHANGE, NEXT_STEP } from '../reducer';

export const FormUserDetails = () => {
  const { firstName, lastName, email } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <MuiThemeProvider >
      <React.Fragment>
        <Dialog open={true} fullWidth={true} maxWidth='md'>
          <AppBar title={'Enter User Details'} />
          <TextField
            placeholder={'Enter Your First Name'}
            label={'First Name'}
            onChange={(e) => dispatch({ type: FIRSTNAME_CHANGE, payload: e.target.value })}
            defaultValue={firstName}
            margin={'normal'}
            fullWidth={true}
          />
          <br />
          <TextField
            placeholder={'Enter Your Last Name'}
            label={'Last Name'}
            onChange={e => dispatch({ type: LASTNAME_CHANGE, payload: e.target.value })}
            defaultValue={lastName}
            margin={'normal'}
            fullWidth={true}
          />
          <br />
          <TextField
            placeholder={'Enter Your Email'}
            label='Email'
            onChange={e => dispatch({ type: EMAIL_CHANGE, payload: e.target.value })}
            defaultValue={email}
            margin={'normal'}
            fullWidth={true}
          />
          <br />
          <Button
            color={'primary'}
            variant={'contained'}
            onClick={() => dispatch({ type: NEXT_STEP })}
          >Continue</Button>
        </Dialog>
      </React.Fragment>
    </MuiThemeProvider>
  );
}