import React from 'react';

import classes from './SubmitButton.module.css';

const SubmitButton = (props) => (
  <input
    className={classes.Submit}
    type="submit"
    value="Submit"
    onClick={props.submit} />
)

export default SubmitButton;