import React from 'react';

import classes from './TextInput.module.css';

const TextInput = (props) => (
  <input className={classes.TextInput} type="text" onChange={props.changed} placeholder={props.placeholder} />
);

export default TextInput;