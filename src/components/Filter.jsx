import { useDispatch } from "react-redux";
import { filterContacts } from "redux/addContacts/addContacts";
import React from "react";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <input type="text" placeholder="filter" name="filtro" onChange={handleFilterChange} />
  );
};

export default Filter;