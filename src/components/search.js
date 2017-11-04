import React from 'react';
import { inputStyle } from './components-styled';

const Search = (props) => {
  const { filter, select } = props;

  return (
    <div className="form-group col-sm-3">
      <input type="text" className="form-control" style={inputStyle} placeholder="Search by name, location, size" onChange={(e) => filter(e)} />
      <select id="selectFilter" onChange={ e => select(e.target.value)}>
        <option value="name" > Name </option>
        <option value="location" > Location </option>
        <option value="size" > Size </option>
      </select>
    </div>
  );
};

export default Search;
