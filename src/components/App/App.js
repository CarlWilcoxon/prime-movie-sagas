import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import modules for routes
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import SimpleSlide from '../SimpleSlide/SimpleSlide';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <CssBaseline />
      <Container className="App">
        <Router>
          <nav>
            <Link to = "/">
              <Button color = "primary"> Home </Button>
            </Link>
            {'\u00A0'}{'\u00A0'}
            <Link to = "/Details">
              <Button color = "primary"> Details </Button>
            </Link>

          </nav>

          <p>Movie Database App</p>
          <SimpleSlide />
        <div>
          <Route exact path="/" component={MovieList}/>
          <Route exact path="/Details" component={Details}/>
        </div>
        </Router>
      </Container>
      </>
    );
  }
}

export default App;

