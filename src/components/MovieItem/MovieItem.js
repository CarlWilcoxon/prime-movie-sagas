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


  // Setup the click handler
  clickHandler = () => {;
    // Take the user to the corresponding details page
    this.props.history.push('/details/' + this.props.movie.id);
  }
  // Renders this component
  render() {

    // brings in Material UI styles
    // const {classes} = this.props;

    return (
      <>
      <Paper className="MovieItem" component="div">
      <img
      src={this.props.movie.poster}
      onClick={this.clickHandler}
      alt={this.props.movie.title + ' poster'} />

        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.description}</p>
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