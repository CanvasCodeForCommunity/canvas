import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CircularImage from '../../commons/CircularImage';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 2rem 3rem 2rem',
    height: '100%',
    background: 'white',
    [theme.breakpoints.up('md')]: {
      padding: '5rem 6rem 5rem 6rem',
    },
  },
  info: {
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
  },
  name: {
    lineHeight: 2,
    fontWeight: 700,
    color: 'black',
    fontSize: '1.75rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.125rem',
      lineHeight: 2,
    },
  },
  imgCircular: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
});

class TestimonialCarouselComponent extends Component {
  render() {
    const { name, quote, backgroundImagePath } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CircularImage
          filename={backgroundImagePath}
          classProps={classes.imgCircular}
        />

        <div className={classes.info}>
          <Typography variant="h4" className={classes.name} gutterBottom>
            {name}
          </Typography>

          <Typography variant="subtitle1">{quote}</Typography>
        </div>
      </div>
    );
  }
}

TestimonialCarouselComponent.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  backgroundImagePath: PropTypes.string.isRequired,
};

export default withStyles(styles)(TestimonialCarouselComponent);
