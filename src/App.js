import React, { Fragment } from 'react';
import './App.less';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';

function App({ state, dispatch }) {
  return (
    <Fragment>
      <Navbar
        bg="dark"
        ticky="top"
        className="shadow-lg p-3 mb-3 navbar"
        variant="dark"
      >
        <Navbar.Brand href="#">THE RICK AND MORTY API</Navbar.Brand>
      </Navbar>

      <div>dats</div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(App);
