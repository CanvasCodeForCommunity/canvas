import React, { Component } from 'react';

import { primary } from '../../../utils/Colors';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Image from '../../image';

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    padding: '3rem 2rem 3rem 2rem', //top right bottom left
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 6rem 3rem 6rem', //top right bottom left
    },
  },
  title: {
    color: '#000',
    fontSize: '1rem',
    // fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  iconImage: {
    maxHeight: '100%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& img': {
      objectFit: 'contain !important',
    },
  },
});

class AboutUsComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Grid item xs={12} sm={4}>
            <Typography className={classes.title} align="left">
              <Typography variant={'subtitle1'}>
                <b>#codeForCommunity</b> is here to create learning
                opportunities for underserved communities.
              </Typography>
              <br />
              <Typography variant={'subtitle1'}>
                Whether it’s helping them to learn a programming language,
                making them aware of about about online safety or helping them
                develop skills for a career, <b>#codeForCommunity</b> is here to serve.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Image filename={'macbookpro.png'} classProps={classes.iconImage} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsComponent);
