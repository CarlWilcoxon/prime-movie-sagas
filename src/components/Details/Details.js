import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// const styles = theme => ({
//   root: {
//     //
//   },
//   flex: {
//     flex: 1
//   }
// })

class Details extends Component {
  // Renders the entire app on the DOM
  render() {
    // brings in Material UI styles
    // const {classes} = this.props;

    return (
      <>
      <Box className="Details" component="div">
        <p>Empty Page</p>
      </Box>
      </>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Details);

// Details.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Details);