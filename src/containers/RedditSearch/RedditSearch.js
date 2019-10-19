import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Posts from '../../components/Posts/Posts';
import SearchForm from '../../components/UI/SearchForm/SearchForm';
import TextInput from '../../components/UI/SearchForm/TextInput/TextInput';
import SubmitButton from '../../components/UI/SearchForm/SubmitButton/SubmitButton';

class RedditSearch extends Component {
  state = {
    inputValue: '',
    posts: [],
    title: '',
    error: false
  }

  inputChangeHandler = e => {
    this.setState({ inputValue: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    const subredditName = this.state.inputValue;
    axios.get(`http://www.reddit.com/r/${subredditName}.json`)
      .then(res => {
        console.log(res);
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({
          error: false,
          title: subredditName,
          posts: posts
        });
      }, error => {
          this.setState({error: true})
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            this.setState({errorMessage: `There was an error with the response: ${error.response.data.error} ${error.response.data.message}`})
          } else if (error.request) {
            console.log(error.request);
            this.setState({errorMessage: 'There was an error with your request. Please try a different subreddit name.'})
          } else {
            console.log('Error', error.message);
            this.setState({errorMessage: 'Something went wrong, please try again.'})
          }
          console.log(error);
      });
  }
  
  render () {
    return (
      <Aux>
        <SearchForm>
          <TextInput changed={this.inputChangeHandler} />
          <SubmitButton submit={this.submitHandler} />
        </SearchForm>

        {this.state.error ? <h2>{this.state.errorMessage}</h2> : 
          <Posts title={this.state.title} posts={this.state.posts} />
        }
      </Aux>
    )
  }
}

export default RedditSearch;