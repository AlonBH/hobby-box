import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './home/home';
import Blog from './containers/Blog';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
