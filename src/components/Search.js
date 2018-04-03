import React from 'react';
 
const Search = ({handleSearchInputChange}) => {
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(e) => {handleSearchInputChange(e.target.value)}}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

export default Search;
