import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        textAlign: 'center',
        marginBottom: 30
    },
    title: {
        marginBottom: 20,
        fontWeight: 700,
    },
    icon: {
        marginBottom: 20,
        position: 'relative',
        width: '100%',
        height: 200,
        [theme.breakpoints.up('md')]: {
            height: 300
        },
    }
})

class ValuesComponent extends Component {
  render() {
    const { title, description, Icon } = this.props
    const { classes } = this.props;

    return (
      <Grid 
        item 
        xs={12}
        sm={5}
        className={classes.root}
      >
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <div className = {classes.icon}>
            {Icon}
        </div>
        <Typography variant="body1" className={classes.description}>{description}</Typography>
      </Grid>
    )
  }
}


ValuesComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default withStyles(styles)(ValuesComponent);