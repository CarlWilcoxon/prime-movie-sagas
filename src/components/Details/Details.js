import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Paper, Slide, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/MovieTheme';

// Create a theme object


class Details extends Component {

  // Do stuff as the user arrives
  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    this.props.dispatch( { type: 'FETCH_DETAILS', payload: this.props.match.params.id} );
    console.log(this.props.reduxState);
  }

  render() {
    // brings in Material UI styles
    const {classes} = this.props;

    return (
      <>
      <Slide direction="left" in={true} timeout={250} mountOnEnter unmountOnExit>
        <Paper className={classes.paper} component="div">

          {/* conditional rendering to make sure the details loaded */}
          {
            ( this.props.details.title !== undefined )
          ?
              // render once the details load
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center">
              <Grid item>
                <img src={this.props.details.poster} alt={this.props.details.title + ' poster'} />
              </Grid>
              <Grid item>
                <Typography paragraph variant={'caption'}>{this.props.details.title}</Typography>
              </Grid>
              <Grid item>
                <Typography paragraph variant={'body1'}>{this.props.details.description}</Typography>
              </Grid>
              <Grid
              container
              justify="flex-end"
              align="flex-end">
                <Grid item>
                  <Button variant={"contained"} color={"primary"}>Edit</Button>
                </Grid>
              </Grid>
            </Grid> // end Grid container
          :
              // render if the details don't load
              <Typography paragraph>Page failed to load, please refresh.</Typography>
          }
        </Paper>
      </Slide>
      </>
    );
  }
}

// mapping the reduxState to props, and checking to see if details have loaded yet
// if they loaded, assign this.props.details to the movie, otherwise return an empty array.
const mapStateToProps = reduxState => ({
  reduxState: reduxState,
  details: ((reduxState.details.length > 0)? reduxState.details[0] : []),
});

Details.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(connect(mapStateToProps)(Details));