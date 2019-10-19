import React from 'react';

const TextInput = (props) => (
  <input type="text" onChange={props.changed} />
);

export default TextInput;