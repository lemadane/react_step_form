import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { OCCUPATION_CHANGE, PREV_STEP, NEXT_STEP, CITY_CHANGE, BIO_CHANGE } from '../reducer';

export const FormPersonalDetails = () => {
  const { occupation, city, bio } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <MuiThemeProvider >
      <React.Fragment>
        <Dialog
          open={true}
          fullWidth={true}
          maxWidth='sm'
        >
          <AppBar title='Enter Personal Details' />
          <TextField
            placeholder='Enter Your Occupation'
            label='Occupation'
            onChange={e => dispatch({ type: OCCUPATION_CHANGE, payload: e.target.value })}
            defaultValue={occupation}
            margin='normal'
            fullWidth={true}
          />
          <br />
          <TextField
            placeholder='Enter Your City'
            label='City'
            onChange={e => dispatch({ type: CITY_CHANGE, payload: e.target.value })}
            defaultValue={city}
            margin='normal'
            fullWidth={true}
          />
          <br />
          <TextField
            placeholder='Enter Your Bio'
            label='Bio'
            onChange={e => dispatch({ type: BIO_CHANGE, payload: e.target.value })}
            defaultValue={bio}
            margin='normal'
            fullWidth={true}
          />
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
          >Continue</Button>
        </Dialog>
      </React.Fragment>
    </MuiThemeProvider>
  );
}