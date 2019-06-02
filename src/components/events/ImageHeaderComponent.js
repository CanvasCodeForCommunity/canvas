import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { primary } from '../../utils/Colors';

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

class ImageHeaderComponent extends Component {

  render() {
    const { siteTitle, location, siteDescription, date } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <div className={classes.container}>
          <Typography variant="h3" className={classes.whiteText}>
            {siteTitle}
          </Typography>

          <Typography variant="h6" className={classes.whiteText}>
            {location} ∙ {date}
          </Typography>

          <Typography variant="body1" className={classes.whiteText}>
            {siteDescription}
          </Typography>
        </div>
      </div>
    );
  }
}

ImageHeaderComponent.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageHeaderComponent);
