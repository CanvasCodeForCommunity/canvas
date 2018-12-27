import React, { Component } from 'react';
import { primary } from '../utils/Colors';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  header: {
    background: primary,
    marginBottom: '1.45rem',
    height: '30vh',
  },
  container: {
    margin: '0 auto',
    padding: '1.45rem 1.0875rem',
    maxWidth: 960,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '30vh',
  },
  whiteText: {
    color: 'white',
  },
});

class EventHeaderComponent extends Component {
  
  render() {
    const { siteTitle, siteSecondaryTitle } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <div className={classes.container}>
          <Typography variant="h3" className={classes.whiteText}>
            {siteTitle}
          </Typography>

          <Typography variant="body1" className={classes.whiteText}>
            {siteSecondaryTitle}
          </Typography>
        </div>
      </div>
    );
  }
}

EventHeaderComponent.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteSecondaryTitle: PropTypes.string.isRequired,
};

export default withStyles(styles)(EventHeaderComponent);
