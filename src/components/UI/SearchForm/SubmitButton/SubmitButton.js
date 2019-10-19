import React from 'react';

const SubmitButton = (props) => (
  <input type="submit" value="Submit" onClick={props.submit} />
)

export default SubmitButton;