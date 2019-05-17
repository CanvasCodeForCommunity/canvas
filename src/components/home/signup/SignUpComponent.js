import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { primary } from '../../../utils/Colors';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    position: 'relative',
    padding: '5rem 2rem 5rem 2rem', //top right bottom left
    background: primary,
    [theme.breakpoints.up('md')]: {
      //desktop
      padding: '3rem 6rem 3rem 6rem',
    },
  },
  title: {
    color: '#fff',
    fontSize: '1.5rem',
    [theme.breakpoints.up('md')]: {
      //desktop
      fontSize: '2.125rem',
    },
  },
  links: {
    textDecoration: 'none',
    color: primary,
  },
  btn: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: '10px 25px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    [theme.breakpoints.up('md')]: {
      padding: '10px 100px',
      marginRight: 15,
    },
  },
});

class SignUpComponent extends Component {
  render() {
    const { title, btnText, btnLink } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Button className={classes.btn}>
            <a href={btnLink} className={classes.links} target="_blank">
              {btnText}
            </a>
          </Button>
        </Grid>
      </div>
    );
  }
}

SignUpComponent.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
};

//make this component available to the app
export default withStyles(styles)(SignUpComponent);
