import { useDispatch } from "react-redux";
import { filterContacts } from "redux/addContacts/addContacts";
import React from "react";
import css from "../filter_css/filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <>
    <h1 className={css.searchtitle}>Search Contacts</h1>
    <input type="text" className={css.input} placeholder="filter" name="filtro" onChange={handleFilterChange} />
    </>
  );
};

export default Filter;
