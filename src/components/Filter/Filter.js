import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Filter.less';

function Filter(props) {
  const { filters, filterParms, clearFilter } = props;
  const filterKeys = Object.keys(filters);

  const containerClass = 'filter-sideBar__container--show';

  return (
    <div className="filter-sideBar">
      <h2 className="filter-sideBar__heading">Filters</h2>
      <div className={containerClass}>
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
    </div>
  );
}

export default Filter;
