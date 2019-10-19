import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  // const createdDate = new Date(props.created);
  // console.log(props.created);
  
  // const createdDateString = createdDate.toLocaleString();

  return (
    <div className={classes.Post}>
      <div className={classes.Header}>
        <h2 className={classes.Title}>{props.title}</h2>
        <h3 className={classes.Author}>By: {props.author}</h3>
      </div>
      <div className={classes.Footer}>
        <p className={classes.Created}>Created: </p>
        <p className={classes.Score}>Score: {props.score}</p>
      </div>
      <a
        className={classes.FauxLink}
        href={`https://www.reddit.com${props.url}`}
        target="_blank"
        rel="noreferrer noopener"
        title={props.title}></a>
    </div>
  )
};

export default Post;