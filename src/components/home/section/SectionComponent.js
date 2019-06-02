import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { primary } from '../../../utils/Colors';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    position: 'relative',
    padding: '5rem 2rem 5rem 2rem', //top right bottom left
    background: primary,
    [theme.breakpoints.up('md')]: {
      //desktop
      padding: '5rem 6rem 5rem 6rem',
    },
  },
  title: {
    color: 'white',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      //desktop
      fontSize: '1rem',
    },
  }
});

class SectionComponent extends Component {
  render() {
    const { title } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Typography className={classes.title} gutterBottom variant={'subtitle1'}>
            You don’t need to know anything specific in technology to join as a volunteer – if you give us <b>two hours a week</b>, we’ll guide you through a huge range of possibilities. Our volunteers speak of an enormous sense of achievement on finishing a program.
          </Typography>
        </Grid>
      </div>
    );
  }
}

SectionComponent.propTypes = {
  title: PropTypes.string.isRequired
};

//make this component available to the app
export default withStyles(styles)(SectionComponent);
