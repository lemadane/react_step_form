export const NEXT_STEP = Symbol();
export const PREV_STEP = Symbol();
export const FIRSTNAME_CHANGE = Symbol();
export const LASTNAME_CHANGE = Symbol();
export const EMAIL_CHANGE = Symbol();
export const OCCUPATION_CHANGE = Symbol();
export const CITY_CHANGE = Symbol();
export const BIO_CHANGE = Symbol();

const initialState = {
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP: return {
      ...state,
      step: state.step + 1,
    };
    case PREV_STEP: return {
      ...state,
      step: state.step - 1,
    };
    case FIRSTNAME_CHANGE: return {
      ...state,
      firstName: action.payload,
    };
    case LASTNAME_CHANGE: return {
      ...state,
      lastName: action.payload,
    };
    case EMAIL_CHANGE: return {
      ...state,
      email: action.payload,
    };
    case OCCUPATION_CHANGE: return {
      ...state,
      occupation: action.payload,
    };
    case CITY_CHANGE: return {
      ...state,
      city: action.payload,
    };
    case BIO_CHANGE: return {
      ...state,
      bio: action.payload,
    };

    default: return state;
  }
};
