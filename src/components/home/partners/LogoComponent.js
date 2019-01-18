import React, { Component } from 'react';

import Image from '../../image';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginBottom: 15,
  },
  logo: {
    position: 'relative',
    width: '100%',
  },
  logoImage: {
    maxHeight: '100%',
    '& img': {
      objectFit: 'contain !important',
    },
  },
});

class LogoComponent extends Component {
  render() {
    const { filename } = this.props;
    const { classes } = this.props;

    return (
      <Grid item xs={5} sm={5} className={classes.root}>
        <div className={classes.logo}>
          <Image filename={filename} classProps={classes.logoImage} />
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(LogoComponent);
