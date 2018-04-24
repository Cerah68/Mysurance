import React, { Component } from 'react';
import Routes from '../routes';
import Header from './common/Header';

import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Routes />
        </Container>
      </div>
    );
  }
}

export default App;
