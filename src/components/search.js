import React from 'react';
import { inputStyle } from './components-styled';

const Search = (props) => {
  const { filter, select } = props;

  return (
    <div className="form-group d-flex flex-row justify-content-end"
      style={{paddingTop: '10px'}}
    >
      <div className="col-sm-3">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Filter by name, location, size"
          onChange={(e) => filter(e)}
        />
      </div>
      <div className="col-sm-1"
          style={{ textAlign: 'center', paddingRight: '0' }}
      >
        <select id="selectFilter"
          className="form-control form-control-sm"
          onChange={ e => select(e.target.value)}
        >
          <option value="name" > Name </option>
          <option value="location" > Location </option>
          <option value="size" > Size </option>
        </select>
      </div>
    </div>
  );
};

export default Search;
