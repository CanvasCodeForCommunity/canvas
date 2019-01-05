import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BannerImage from './image'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
      position: 'relative',
      padding: '3rem 2rem 20rem 2rem',
      textAlign: 'left !important',
      height: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
      [theme.breakpoints.up('md')]: {
          padding: '5rem 6rem 20rem 4rem',
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
    [theme.breakpoints.up('sm')]: {
        width: '55%',
    },
  },
  title: {
    lineHeight: 1.25,
    fontWeight: 700,
    color: '#fff',
    fontSize: '1.75rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
        lineHeight: 1.5
    },
  }
})

class FeaturedEventCarouselComponent extends Component {
  render() {
    const { title, backgroundImagePath } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BannerImage filename={backgroundImagePath} classProps={classes.bgImg}/>
        
        <div className={classes.info}>
          <Typography variant="h4" className={classes.title} gutterBottom>{title}</Typography>
        </div>        
      </div>
    )
  }
}

FeaturedEventCarouselComponent.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImagePath: PropTypes.string.isRequired,
};


export default withStyles(styles)(FeaturedEventCarouselComponent);