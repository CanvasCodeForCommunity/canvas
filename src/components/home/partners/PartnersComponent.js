import React, { Component } from 'react';

import LogoComponent from './LogoComponent';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    padding: '3rem 1.5rem 3rem 1.5rem',
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '1.25em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.125rem',
      lineHeight: 1.5,
    },
  },
});

class PartnersComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Awesome Partners
        </Typography>
        <Grid container justify="space-around">
          <LogoComponent filename={'google.png'} />
          <LogoComponent filename={'google.png'} />
          <LogoComponent filename={'google.png'} />
          <LogoComponent filename={'google.png'} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PartnersComponent);
