import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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

class MovieItem extends Component {
  // Renders the entire app on the DOM
  render() {
    // brings in Material UI styles
    // const {classes} = this.props;

    return (
      <>
      <Paper className="MovieItem" component="div">
        {this.props.movie.title}
      </Paper>
      </>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(MovieItem);

// MovieItem.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(MovieItem);