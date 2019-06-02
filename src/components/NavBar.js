import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { primary, hoverPrimary } from '../utils/Colors';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';

import codeForCommunity from '../images/codeforcommunity.png';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: 'white',
  },
  grow: {
    flexGrow: 1,
  },
  links: {
    textDecoration: 'none',
    color: 'black',
  },
  whiteLinks: {
    textDecoration: 'none',
    color: 'white',
  },
  sectionDesktop: {
    display: 'none',
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginRight: 20,
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navItemBtn: {
    textTransform: 'capitalize',
  },
  navBoxItemBtn: {
    backgroundColor: primary,
    padding: '5px 15px',
    marginLeft: 5,
    marginRight: 5,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: hoverPrimary,
    },
  },
  list: {
    width: 200,
  },
  siteIcon: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '20em',
      height: '5em',
    },
  },
  siteTitle: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const NavItem = ({ to, title, classes }) => {
  return (
    <Link to={'/' + to} className={classes.links}>
      <Button color="inherit" className={classes.navItemBtn}>
        {title}
      </Button>
    </Link>
  );
};

const NavItemMobile = ({ to, title, classes }) => {
  return (
    <Link to={'/' + to} className={classes.links}>
      <ListItem button key={title}>
        <ListItemText primary={title} className={classes.navItemBtn} />
      </ListItem>
    </Link>
  );
};

const NavBoxItem = ({ to, title, classes }) => {
  return (
    <Link to={'/' + to} className={classes.whiteLinks}>
      <Button color="inherit" className={classes.navBoxItemBtn}>
        {title}
      </Button>
    </Link>
  );
};

class NavBar extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { siteTitle } = this.props;
    const { classes } = this.props;

    const mobileDrawerItems = (
      <div className={classes.list}>
        <List>
          <NavItemMobile to="" title="home" classes={classes} />

          <NavItemMobile to="about" title="About" classes={classes} />

          <NavItemMobile to="volunteer" title="Volunteer" classes={classes} />

          <NavItemMobile to="young_coder" title="Young Coders" classes={classes} />

          <NavItemMobile to="cap" title="CAP" classes={classes} />
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* Hamburger icon */}
            <div className={classes.sectionMobile}>
              <IconButton
                onClick={this.toggleDrawer('left', true)}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </div>

            {/* Site icon */}
            <Button className={classes.siteIcon} color="inherit">
              <Link to="/" className={classes.links}>
                <img src={codeForCommunity} />
              </Link>
            </Button>

            {/* Site title */}
            <Typography variant="h6" noWrap className={classes.siteTitle}>
              <Link to="/" className={classes.links}>
                {siteTitle}
              </Link>
            </Typography>

            <div className={classes.grow} />

            {/* Right nav bar */}
            <div className={classes.sectionDesktop}>
              <NavItem title="Home" to="" classes={classes} />

              <NavItem title="About" to="about" classes={classes} />

              <NavItem title="Volunteer" to="volunteer" classes={classes} />

              <NavBoxItem title="Young Coders" to="young_coder" classes={classes} />

              <NavBoxItem title="CAP" to="cap" classes={classes} />
            </div>

            {/*  Mobile Nav Drawer */}
            <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
            >

              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {mobileDrawerItems}
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
};

NavBar.defaultProps = {
  siteTitle: '',
};

export default withStyles(styles)(NavBar);
