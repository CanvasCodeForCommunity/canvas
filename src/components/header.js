import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

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

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: '#fff',
  },
  grow: {
    flexGrow: 1
  },
  links: {
    textDecoration: 'none',
    color: '#000'
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
    textTransform: "capitalize",
  },
  joinUsBtn: {
    backgroundColor: primary,
    textTransform: "capitalize",
    padding: '5px 15px',
    '& a': {
      color: '#fff'
    },
    '&:hover': {
      backgroundColor: hoverPrimary
    }
  }, 
  joinUsBtnMobile: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: hoverPrimary
    }
  },
  joinUsBtnText: {
    color: '#fff',
  }, 
  list: {
    width: 200
  }
})

const NavItem = ({ title, classes }) => {
  return (
    <Link to={"/" + title} className={classes.links}>
      <Button color="inherit" className = {classes.navItemBtn}>{title}</Button>
    </Link>
  )
}

const NavItemMobile = ({ title, classes }) => {
  return (
    <Link to={"/" + title} className={classes.links}>
      <ListItem button key={title}>
        <ListItemText primary={title} className={classes.navItemBtn}/>
      </ListItem>
    </Link>
  )
}

class Header extends Component {
  state = {
    keft: false, 
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
    <div className = {classes.list}>
      <List>
        <NavItemMobile title='events' classes={classes}/>
        <NavItemMobile title='resources' classes={classes}/>

        <a href = "#" className = {classes.links}>
          <ListItem button key="join-us" className={classes.joinUsBtnMobile}>
            <ListItemText 
              disableTypography
              primary={<Typography variant="body1" className={classes.joinUsBtnText}>Join Us</Typography>}
            />
          </ListItem>
        </a>
      </List>
    </div>
   )

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton 
                onClick={this.toggleDrawer('left', true)} 
                color="inherit" 
                aria-label="Menu"
              >
                <MenuIcon color="primary"/>
              </IconButton>
            </div>

            <Typography variant="h6" noWrap>
              <Link to="/" className={classes.links}>
                { siteTitle }
              </Link>
            </Typography>
      
            <div className = {classes.grow}></div>
        
            <div className = {classes.sectionDesktop}>
              <NavItem title = "events" classes={classes}/>
              <NavItem title = "resources" classes={classes}/>
        
              <Button  className = {classes.joinUsBtn}>
                <a href = "#" className={classes.links}>Join Us</a>
              </Button>
            </div>

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
    )
 } 
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default withStyles(styles)(Header);
