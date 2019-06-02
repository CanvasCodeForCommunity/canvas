import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import BannerImage from '../../commons/BannerImage';
import { primary, hoverPrimary } from '../../../utils/Colors'

const styles = theme => ({
  root: {
    position: 'relative',
    padding: '8rem 2rem 11rem 2rem',
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
    [theme.breakpoints.up('md')]: {
      padding: '8rem 6rem 12rem 6rem',
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
    color: 'white',
    fontSize: '1.75rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.125rem',
      lineHeight: 1.5
    },
  },
  description: {
    marginBottom: 15,
    color: 'white',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  },
  btn: {
    backgroundColor: 'white',
    color: primary,
    marginRight: 15,
    marginBottom: 15,
    padding: '8px 15px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    [theme.breakpoints.up('md')]: {
      padding: '10px 25px',
      marginRight: 15,
    },
  },
  btnCTA: {
    backgroundColor: primary,
    color: 'white',
    marginRight: 0,
    '&:hover': {
      backgroundColor: hoverPrimary
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 15,
    },
  },
  links: {
    textDecoration: 'none',
    color: 'black'
  },
});

class BannerComponent extends Component {

  render() {
    const { title, description, btnOneText, btnOneLink, btnTwoText, btnTwoLink } = this.props;
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <BannerImage filename={'home_cover.jpg'} classProps={classes.bgImg} />
        <div className={classes.info}>
          <Typography variant="h4" className={classes.title} gutterBottom>{title}</Typography>
          <Typography variant="h6" className={classes.description}>{description}</Typography>
          <div>
            <Link to={"/" + btnOneLink} className={classes.links}>
              <Button className={classes.btn}>{btnOneText}</Button>
            </Link>

            <Link to={"/" + btnTwoLink} className={classes.links}>
              <Button className={`${classes.btn} ${classes.btnCTA}`}>{btnTwoText}</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

BannerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  btnOneText: PropTypes.string.isRequired,
  btnOneLink: PropTypes.string.isRequired,
  btnTwoText: PropTypes.string.isRequired,
  btnTwoLink: PropTypes.string.isRequired,
};

//make this component available to the app
export default withStyles(styles)(BannerComponent);