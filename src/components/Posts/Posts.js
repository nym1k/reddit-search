import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Post from './Post/Post';

const Posts = (props) => (
  <Aux>
    { props.title ? <h1>{`/r/${props.title}`}</h1> : null }
    <ul>
      {props.posts.map(post =>
        <Post key={post.id} title={post.title} />
      )}
    </ul> 
  </Aux>
);

export default Posts;