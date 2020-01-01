import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Character.less';

import CharacherCard from '../components/CharacherCard/CharacherCard';
import { getCharacters, getInfo } from '../reducers/characterReducer';
import { fetchAllCharacters } from '../actions/characterAction';

export class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllCharacters();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row-left"></div>
          <div className="row-right">
            <div className="search-bar"></div>
            <div className="characters">
              {this.props.characters.length > 0 ? (
                this.props.characters.map(character => (
                  <CharacherCard character={character} id={character.id} />
                ))
              ) : (
                <h1>Loading</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state.character),
  info: getInfo(state.character)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllCharacters: fetchAllCharacters
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Character);
