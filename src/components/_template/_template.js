import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// const styles = theme => ({
//   root: {
//     //
//   },
//   flex: {
//     flex: 1
//   }
// })

class _template extends Component {
  // Renders the entire app on the DOM
  render() {
    // brings in Material UI styles
    // const {classes} = this.props;

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


// _template.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(_template);