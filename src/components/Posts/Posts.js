import React from 'react';

import classes from './Posts.module.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Post from './Post/Post';

const Posts = (props) => (
  <Aux>
    { props.title ? <h1 className={classes.Title}>Now showing posts from: {`/r/${props.title}`}</h1> : null }
    <ul className={classes.Items}>
      {props.posts.map(post => (
        <li className={classes.Item}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            created={post.created_utc} 
            url={post.permalink}
            score={post.score}
          />
        </li>
      )
      )}
    </ul>
    {props.title ? 
    <a href={`https://www.reddit.com/r/${props.title}`} target="_blank" rel="noopener noreferrer">See More</a>
    : null}
  </Aux>
);

export default Posts;