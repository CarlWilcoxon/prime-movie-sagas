import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <CssBaseline />
      <Container className="App">
        <p>Empty Page</p>
      </Container>
      </>
    );
  }
}

export default App;
