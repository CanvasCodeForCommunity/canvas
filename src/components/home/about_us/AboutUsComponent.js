import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Image from '../../commons/Image';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    padding: '3rem 2rem 3rem 2rem', //top right bottom left
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '0rem 0rem 0rem 6rem', //top right bottom left
    },
  },
  textGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  imageGrid: {
    display: 'none',
    maxHeight: '500px',
    paddingLeft: '50px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
  },
  iconImage: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& img': {
      objectFit: 'cover !important',
    },
  },
});

class AboutUsComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Grid item xs={12} sm={12} md={4} className={classes.textGrid}>
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
          <Grid item xs={12} sm={8} className={classes.imageGrid}>
            <Image filename={'about_us.jpg'} classProps={classes.iconImage} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsComponent);
