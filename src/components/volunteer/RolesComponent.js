import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

import { royalBlue } from '../../utils/Colors'

const styles = theme => ({
  root: {
    padding: '3rem 2rem 2.5rem 2rem',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem 4rem 2.5rem 4rem'
    },
    [theme.breakpoints.up('md')]: {
      padding: '3rem 5rem 2.5rem 5rem'
    },
  },
  title: {
    marginBottom: '0.75rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '2rem'
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileRolesTitle: {
    fontSize: 20,
    color: royalBlue
  },
  sectionTabletDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  tabletDesktopTitle: {
    fontSize: 20,
    color: royalBlue
  },
  tabletDesktopDescription: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

class RolesComponent extends Component {
  mobileComponent = (classes, rolesData) => {
    const roles = rolesData.edges;

    return (
      roles.map((role, index) => (
        <ListItem divider key={index}>
          <ListItemText
            classes={{ primary: classes.mobileRolesTitle }}
            primary={role.node.name}
            secondary={role.node.description}
          />
        </ListItem >
      ))
    )
  }

  tabletDesktopComponent = (classes, rolesData) => {
    const roles = rolesData.edges;

    return (
      roles.map((role, index) => (
        <Grid item
          xs={6} md={4}
        >
          <Typography className={classes.tabletDesktopTitle} variant="body1" gutterBottom>{role.node.name}</Typography>
          <Typography className={classes.tabletDesktopDescription} variant="body2">{role.node.description}</Typography>
        </Grid>
      ))
    )
  }

  render() {
    const { roles } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          className={classes.title}
          variant="h5"
          align="center"
        >
          Roles
        </Typography>

        <List
          className={classes.sectionMobile}
          component="nav"
        >
          {this.mobileComponent(classes, roles)}
        </List>

        <Grid container
          className={classes.sectionTabletDesktop}
          spacing={40}
        >
          {this.tabletDesktopComponent(classes, roles)}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(RolesComponent);