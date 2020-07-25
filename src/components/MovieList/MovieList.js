import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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

class MovieList extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_MOVIES'})
  }


  render() {
    // brings in Material UI styles
    // const {classes} = this.props;

    return (
      <>
      <Box className="MovieList" component="div">
        <p>MovieList Page</p>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
           <Grid item xs={12}>
             {/* map through all the movies */}
             {this.props.reduxState.movies.map( movie =>
             <MovieItem key={movie.id} movie={movie}/>)}
           </Grid>
        </Grid>
      </Box>
      </>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(MovieList);


// MovieList.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(MovieList);