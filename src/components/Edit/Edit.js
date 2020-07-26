import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/MovieTheme';


class Edit extends Component {
  // Renders the entire app on the DOM
  render() {
    // brings in Material UI styles
    const {classes} = this.props;

    return (
      <>
      <Box className="Edit" component="div">
        <p>Empty Page</p>
      </Box>
      </>
    );
  }
}


// mapping the reduxState to props, and checking to see if details have loaded yet
// if they loaded, assign this.props.details to the movie, otherwise return an empty array.
const mapStateToProps = reduxState => ({
  reduxState: reduxState,
});

// Helps bring in custom Material UI themes
Edit.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(connect(mapStateToProps)(Edit));