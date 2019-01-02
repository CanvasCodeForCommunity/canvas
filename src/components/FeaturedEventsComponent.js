import React, { Component } from 'react';
import Image from './image'

import { primary } from '../utils/Colors';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: '8rem 2rem 11rem 2rem',
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
    [theme.breakpoints.up('md')]: {
        padding: '8rem 6rem 12rem 6rem',
    },
  }
})

class FeaturedEventsComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
      </div>
    )
  }
}


export default withStyles(styles)(FeaturedEventsComponent);