import React, { Component } from 'react';
import { Link } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    backgroundColor: '#424242',
    padding: '1.5rem 0.75rem 1.5rem 0.75rem',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '1.75rem',
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.125rem',
      lineHeight: 1.5,
    },
  },
  description: {
    marginBottom: 15,
    color: '#fff',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  },
  btn: {
    backgroundColor: '#2196f3',
    color: '#fff',
    marginBottom: 15,
    padding: '8px 60px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#1769aa',
    },
    [theme.breakpoints.up('md')]: {
      padding: '10px 100px',
      marginRight: 15,
    },
  },
  links: {
    textDecoration: 'none',
    color: '#000',
  },
});

class ContactUsComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Contact Us
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Drop us an email to reach us.
        </Typography>
        <Link to={'/contact-us'} className={classes.links}>
          <Button className={classes.btn}>Click Here</Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsComponent);
