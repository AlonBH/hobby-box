import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Products from './components/Products/Products';

class App extends Component {
  render () {
    return (
      <Layout>
        <Products />
      </Layout>
    );
  }
}

export default App;
