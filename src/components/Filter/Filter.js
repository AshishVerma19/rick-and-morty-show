import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Filter.less';

function Filter(props) {
  const { filters, filterParms, clearFilter } = props;
  console.log(clearFilter);
  const filterKeys = Object.keys(filters);

  return (
    <div className="filter-sideBar">
      <h2 className="filter-sideBar__heading">
        Filters
        <span className="filter-sideBar__expander  filter-sideBar__expander--show">
          <i className="fa fa-times-circle"></i>
        </span>
      </h2>
      <div>
        <h3 onClick={clearFilter}>
          Clear Filter
          <span className="filter-sideBar__clear-filter">
            <i className="fa fa-times-circle"></i>
          </span>
        </h3>
      </div>

      {filterKeys.map(filterKey => {
        return (
          <div className="filter-sideBar__content" key={filterKey}>
            <h3>{filterKey}</h3>
            {Object.keys(filters[filterKey]).map(propertyKey => (
              <FilterCheckbox
                value={filters[filterKey][propertyKey]}
                filterParms={filterParms}
                key={propertyKey}
                title={propertyKey}
                filterCategory={filterKey}
                toggleChange={props.toggleChange}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
