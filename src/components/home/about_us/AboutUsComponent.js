import React, { Component } from 'react';

import { primary } from '../../../utils/Colors';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    backgroundColor: primary,
    padding: '3rem 1.5rem 3rem 1.5rem',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '1.25em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.125rem',
      lineHeight: 1.5
    },
  }
})

class AboutUsComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>About Us</Typography>
      </div>
    )
  }
}


export default withStyles(styles)(AboutUsComponent);