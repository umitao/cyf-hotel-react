import React from "react";
import TableHeader from "./TableHeader";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = props => {
  return (
    <table className="table">
      <TableHeader />
      {props.results.map((data, index) => (
        <SearchResultsRow key={index} data={data} />
      ))}
    </table>
  );
};

export default SearchResults;
