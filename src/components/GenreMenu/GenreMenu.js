import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Grid, Paper, Slide, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/MovieTheme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class GenreMenu extends Component {
  state = {
    anchorEl: null,
  };

  componentDidMount() {
    console.log("Genres Value:", this.props.genresValue);
    console.log("Genres List:", this.props.genresList);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <>
        {this.props.genresValue.map( (thisGenre) =>
        <Button
          key={this.thisGenre}
          aria-owns={anchorEl ? 'genre-select' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {thisGenre}
        </Button>
        )}

        <Menu
          id="genre-select"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.genresList.filter(eachGenre => !this.props.genresValue.includes(eachGenre)).map( (genre) =>
                      <MenuItem key={genre} onClick={this.handleClose}>{genre}</MenuItem>

          )}
        </Menu>
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
GenreMenu.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(connect(mapStateToProps)(GenreMenu));