import React from 'react';

import classes from './SearchForm.module.css';

const SearchForm = (props) => (
  <form action="/" className={classes.Form}>
    {props.children}
  </form>
)

export default SearchForm;