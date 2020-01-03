import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import './Character.less';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import CharacherCard from '../components/CharacherCard/CharacherCard';
import { getCharacters, getInfo } from '../reducers/characterReducer';
import {
  fetchAllCharacters,
  searchChracter,
  paginateCharacter
} from '../actions/characterAction';
import Filter from '../components/Filter/Filter';
import SearchBar from '../components/SearchBar/SearchBar';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

export class Character extends Component {
  constructor(props) {
    super(props);

    this.filterParms = {
      Species: undefined,
      Gender: undefined
    };
    this.state = {
      sort: 'Ascending',
      name: '',
      filterData: {
        Species: {
          Human: 'human',
          Alien: 'alien',
          Humanoid: 'humanoid'
        },
        Gender: {
          Female: 'female',
          Male: 'male',
          Genderless: 'genderless',
          unknown: 'unknown'
        }
      },
      filterParms: this.filterParms
    };
  }

  toggleChange = (event, filterCategory) => {
    debugger;
    const filterParms = { ...this.state.filterParms };

    filterParms[filterCategory] = event.target.value;

    this.setState({ filterParms });
  };

  onNameChange = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  clearFilter = () => {
    this.setState({
      filterParms: this.filterParms
    });
  };

  removeFilter = (event, type) => {
    event.preventDefault();
    const filterParms = { ...this.state.filterParms };
    filterParms[type] = undefined;

    this.setState({ filterParms });
  };

  searchCharacter = event => {
    event.preventDefault();
    const { name, filterParms } = this.state;
    this.props.searchChracter(name, filterParms);
  };

  paginateCharacters = ({ selected }) => {
    const pageNumber = selected + 1;
    this.props.paginateCharacter(
      pageNumber,
      this.state.name,
      this.state.filterParms
    );
  };

  componentDidMount() {
    this.props.fetchAllCharacters();
  }

  onSortToggle = ({ value }) => {
    if (value === 'Descending') {
      this.setState({ sort: 'Descending' });
    }
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <div className="container">
            <div className="row-left">
              <Filter
                filters={this.state.filterData}
                filterParms={this.state.filterParms}
                toggleChange={this.toggleChange}
                clearFilter={this.clearFilter}
              />
            </div>
            <div className="row-right">
              <div className="search-bar">
                <SearchBar
                  updateFilter={() => {}}
                  name={this.state.name}
                  onNameChange={this.onNameChange}
                  searchCharacter={this.searchCharacter}
                  selectedFilters={this.state.filterParms}
                  removeFilter={this.removeFilter}
                  onSortToggle={this.onSortToggle}
                />
              </div>
              {this.props.isLoading ? (
                <Loader
                  className="loader"
                  type="Puff"
                  color="blue"
                  height={80}
                  width={80}
                />
              ) : (
                <>
                  <div className="characters">
                    {this.props.characters.length > 0 ? (
                      this.props.characters.map(character => (
                        <CharacherCard
                          character={character}
                          key={character.id}
                        />
                      ))
                    ) : (
                      <h1>No Data Found</h1>
                    )}
                  </div>
                </>
              )}
              <div className="character-pagination">
                <ReactPaginate
                  key={this.props.info.page}
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  breakClassName={'break-me'}
                  pageCount={this.props.info.page}
                  onPageChange={this.paginateCharacters}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state.character),
  info: getInfo(state.character),
  isLoading: state.character.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllCharacters: fetchAllCharacters,
      searchChracter: searchChracter,
      paginateCharacter: paginateCharacter
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Character);
