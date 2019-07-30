import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Image from '../commons/Image'

const styles = theme => ({
  root: {
    marginBottom: '1.25rem',
    textAlign: 'center',
  },
  profilePictureContainer: {
    width: '5.5rem',
    height: '5.5rem',
    margin: '0 auto 1.25rem auto',
    [theme.breakpoints.up('md')]: {
      width: '6.25rem',
      height: '6.25rem'
    },
  },
  profilePicture: {
    borderRadius: '50%',
  },
})

class TeamVerticalCardComponent extends Component {
  render() {
    const { name, profilePicture } = this.props;
    const { classes } = this.props;

    return (
      <Grid item xs={6} sm={3} className={classes.root}>
        <div className={classes.profilePictureContainer}>
          <Image filename={profilePicture} classProps={classes.profilePicture} classImageStyle={{ objectFit: 'contain' }} />
        </div>

        <div className={classes.description}>
          <Typography variant="body1" className={classes.name} gutterBottom>{name}</Typography>
        </div>
      </Grid>
    );
  }
}

TeamVerticalCardComponent.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(TeamVerticalCardComponent);
