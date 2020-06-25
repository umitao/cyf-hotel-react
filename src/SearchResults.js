import React from "react";
import TableHeader from "./TableHeader";
import SearchResultsRow from "./SearchResultsRow";
// import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  return (
    <>
      <table className="table">
        <TableHeader />
        {props.results.map((data, index) => (
          <SearchResultsRow key={index} selected={false} data={data} />
        ))}
      </table>
      {/* <CustomerProfile id={props.results.id} /> */}
    </>
  );
};

export default SearchResults;
