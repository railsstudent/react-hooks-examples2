import React from 'react';
import Memo from './Memo';
import Callback from './Callback';
import Context from './Context';
import Reducer from './Reducer';

function App() {
  return (
    <div>
      <Memo />
      <hr />
      <Callback />
      <hr />
      <Context />
      <hr />
      <Reducer />
    </div>
  );
}

export default App;