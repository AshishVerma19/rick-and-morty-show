import React, { Fragment } from 'react';
import './App.less';
import Header from './components/Header/Header';
import Character from './containers/Character';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Character></Character>
    </Fragment>
  );
}

export default App;
