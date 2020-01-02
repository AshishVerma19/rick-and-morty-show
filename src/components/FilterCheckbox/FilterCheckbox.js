import React, { Fragment } from 'react';

function FilterCheckbox(prop) {
  const { title, value, filterCategory, filterParms } = prop;

  return (
    <Fragment>
      <label className="filter-container">
        {title}
        <input
          type="radio"
          checked={filterParms[filterCategory] === value}
          name={filterCategory}
          value={value}
          onChange={e => prop.toggleChange(e, filterCategory, value)}
        />
        <span className="checkmark"></span>
      </label>
    </Fragment>
  );
}

export default FilterCheckbox;
