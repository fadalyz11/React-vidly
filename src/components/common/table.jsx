import React from "react";
import TableHeader from "./tableHeader";
import Tablebody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <Tablebody columns={columns} data={data} />
    </table>
  );
};

export default Table;
