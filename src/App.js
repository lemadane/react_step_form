import React from 'react';
import { Provider } from 'react-redux';
import { UserForm } from './components/UserForm';
import { createStore } from 'redux';
import { reducer } from './reducer';

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <div className="App">
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
