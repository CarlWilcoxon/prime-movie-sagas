import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Grid, Paper, Slide, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/MovieTheme';
import GenreMenu from '../GenreMenu/GenreMenu';

class Edit extends Component {

  // Initialize the state
  state = {
    titleValue: '',
    descriptionValue: '',
    genresValue: [],
    genresList: [],
  }

  // Do stuff as the user arrives
  componentDidMount() {
    this.getDetails();
    this.getGenres();
  }

  // If details/genres loaded, then update the state with them, otherwise do nothing
  componentDidUpdate() {
    if( this.state.titleValue === ''
    && this.state.descriptionValue === ''
    && this.state.genresValue === [] ){
      // update movie details
      this.setState({
        ...this.state,
        titleValue: ((this.props.reduxState.details.length > 0)? this.props.details.title : '' ),
        descriptionValue: ((this.props.reduxState.details.length > 0)? this.props.details.description : '' ),
        genresValue: ((this.props.reduxState.details.length > 0)? this.props.details.genres : [] ),
        });
    } else if (this.state.genresList === []) {
        // update genreList
        this.setState({
          ...this.state,
          genresList: ((this.props.reduxState.genres.length > 0)? this.props.reduxState.genres : '' ),
        });
    }
  }

  // cancelClick = () => {

  // }

  // Setup change handler for the textboxes
  changeHandler = ( propertyName ) => (event) =>{
    this.setState({
      [propertyName]: event.target.value
    });
  }

  getDetails = () => {
    this.props.dispatch( { type: 'FETCH_DETAILS', payload: this.props.match.params.id} );
  }

  getGenres = () => {
    this.props.dispatch( { type: 'FETCH_GENRES', payload: this.props.match.params.id} );
  }

  // saveClick = () => {

  // }


  render() {
    // brings in Material UI styles
    const {classes} = this.props;

    return (
      <>
        {/* conditional rendering to make sure the details are loaded */}
        {
          ( this.props.details.title !== undefined
            && this.props.reduxState.genres.length > 0 )
        ?
            // render once the details load
          <Slide direction="left" in={true} timeout={370} mountOnEnter unmountOnExit>
            <Paper className={classes.paper} component="div">
              <FormControl
              fullWidth>

                <Grid item>
                  <TextField
                  variant="outlined"
                  label="Title"
                  onChange={this.changeHandler('titleValue')}
                  defaultValue={this.props.details.title}
                  />
                </Grid>
                  <TextField
                    fullWidth
                    multiline
                    variant="filled"
                    label="Description"
                    onChange={this.changeHandler('descriptionValue')}
                    defaultValue={this.props.details.description}
                    />
                <Grid
                  container
                  justify="space-between"
                  align="flex-end">
                  <Grid item>
                    <GenreMenu
                          genresValue={this.props.details.genres}
                          genresList={this.props.reduxState.genres}
                          /> taco
                    {/* <Typography variant={'subtitle2'}>
                      {this.props.details.genres.map((genre) =>
                        // Conditional rendering to deal with the last entry in the list
                        // Make a menu for each item, but
                        (this.props.details.genres.indexOf(genre) === this.props.details.genres.length-1)
                      ?
                          // last entry
                          <GenreMenu
                          genre={genre}
                          isLast={true}
                          genresList={this.state.genresList} />
                      :
                          // not the last entry
                          <GenreMenu
                          genreValue={genre}
                          isLast={false}
                          genresList={this.state.genresList} /> )}
                    </Typography> */}
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      spacing={1}
                      >
                      <Grid item>
                        <Button onClick={this.saveEdit} variant={"contained"} color={"primary"}>Save</Button>
                      </Grid>
                      <Grid item>
                        <Button onClick={this.cancelEdit} variant={"outlined"} color={"secondary"}>Cancel</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FormControl> {/* // end Form Control  */}
            </Paper>
          </Slide>
        :
            // render if the details don't load
          <Typography paragraph>Page failed to load, please refresh.</Typography>
        }
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

// Helps bring in custom Material UI themes
Edit.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(connect(mapStateToProps)(Edit));