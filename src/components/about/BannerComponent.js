import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import BannerImage from '../BannerImage';

const styles = theme => ({
  root: {
    position: 'relative',
    padding: '8rem 1.5rem 8rem 1.5rem',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    [theme.breakpoints.up('sm')]: {
      padding: '6rem 3rem 8rem 3rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '7rem 6rem 9rem 6rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '8rem 6rem 11rem 6rem',
    },
  },
  bgImg: {
    position: 'absolute !important',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: '-1',
  },
  info: {
    marginLeft: '2rem',
    marginRight: '2rem'
  },
  title: {
    color: '#f5f5f5',
    fontWeight: 700
  },
  description: {
    marginTop: '2em',
    color: '#f5f5f5'
  }
})

class BannerComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BannerImage filename={'about_cover.jpg'} classProps={classes.bgImg} />
        <div className={classes.info}>
          <Typography variant="h4" className={classes.title} gutterBottom>Welcome!</Typography>
          <Typography variant="h6" className={classes.description}>
            CodeForCommunity is an umbrella project of SoC Family, a network of SoC Students, Staff and Alumni who take great pride in helping develop the projects for underserved communities.
                    </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BannerComponent);
