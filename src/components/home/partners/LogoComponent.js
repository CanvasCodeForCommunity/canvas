import React, { Component } from 'react';

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
});

class LogoComponent extends Component {
  render() {
    const { Logo } = this.props;
    const { classes } = this.props;

    return (
      <Grid item xs={5} sm={5} className={classes.root}>
        <div className={classes.logo}>{Logo}</div>
      </Grid>
    );
  }
}

export default withStyles(styles)(LogoComponent);
