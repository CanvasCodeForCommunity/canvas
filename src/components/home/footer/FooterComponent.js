import React, { Component } from 'react';
import { Link } from 'gatsby';

import { grey26 } from '../../../utils/Colors';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    backgroundColor: grey26,
    padding: '2rem 1.5rem 2rem 4rem',
  },
  description: {
    marginBottom: 10,
    color: 'white',
    fontSize: '0.7rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
  },
  links: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.9rem',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
  },
});

class FooterComponent extends Component {
  render() {
    const { classes } = this.props;
    const { data } = this.props;

    const buildTime = data.buildTimeZone;

    return (
      <div className={classes.root}>
        <Link to={'/facebook'} className={classes.links}>
          Facebook .{' '}
        </Link>
        <Link to={'/instagram'} className={classes.links}>
          Instagram .{' '}
        </Link>
        <Link to={'/twitter'} className={classes.links}>
          Twitter
        </Link>
        <Typography variant="body1" className={classes.description}>
          Updated on {buildTime}
          <br />
          Designed and built by <u>core team</u>.<br />
          Copyright &#169; 2019 - Present. All rights reserved.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(FooterComponent);
