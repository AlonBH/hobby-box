import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './home/home';

class App extends Component {
  render () {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
