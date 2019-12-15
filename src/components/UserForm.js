import React from 'react';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';
import { useSelector } from 'react-redux';


export const UserForm = () => {
  const step = useSelector(state => state.step);
  switch (step) {
    default: return <FormUserDetails />;
    case 2: return <FormPersonalDetails/>;
    case 3: return <Confirm />;
    case 4: return <Success />;
  }
}