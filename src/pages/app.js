import React from 'react';
import { Router } from '@reach/router';
import Person from '../modules/Person';
import { Provider } from 'react-redux';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Person path={`/app/person/:id`} />
      </Router>
    </Provider>
  );
};

export default App;
