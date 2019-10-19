import React from 'react';

import Layout from './components/Layout/Layout';
import RedditSearch from './containers/RedditSearch/RedditSearch';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <RedditSearch />
      </Layout>
    );
  }
}

export default App;