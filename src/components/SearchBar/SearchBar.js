import React from 'react';
import Dropdown from 'react-dropdown';
import '../../common/less/dropdown.less';
import './SearchBar.less';

function SearchBar(props) {
  const {
    searchCharacter,
    name,
    onNameChange,
    selectedFilters,
    removeFilter,
    onSortToggle
  } = props;

  const options = ['Ascending', 'Descending'];
  const { Species, Gender } = selectedFilters;

  const defaultOption = options[0];
  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <h3>Selected Filter</h3>
        <div className="selected-filter__container">
          {Species ? (
            <span
              onClick={e => removeFilter(e, 'Species')}
              className="selected-filter btn btn-primary"
            >
              {Species}
              <i className="fa fa-times"></i>
            </span>
          ) : null}
          {Gender ? (
            <span
              onClick={e => removeFilter(e, 'Gender')}
              className="selected-filter btn btn-primary"
            >
              {Gender}
              <i className="fa fa-times"></i>
            </span>
          ) : null}
        </div>
        <div>
          <label>
            <h3>Search By Name</h3>
          </label>
          <div className="search-inputs">
            <input
              type="text"
              className="form-control"
              placeholder="Character Name"
              value={name}
              onChange={e => onNameChange(e)}
            />
            <input
              type="button"
              className="btn btn-primary"
              value="Search character"
              onClick={searchCharacter}
            />
          </div>
        </div>
      </div>
      <div className="sidebar__sort">
        <label>
          <h3>Sort by ID</h3>
        </label>
        <Dropdown
          options={options}
          onChange={onSortToggle}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
}

export default SearchBar;
