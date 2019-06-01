import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import BannerImage from '../BannerImage';
import { primary, hoverPrimary } from '../../utils/Colors';

const styles = theme => ({
  root: {
  },
  infoContainer: {
    padding: '2rem 3rem',
    [theme.breakpoints.up('md')]: {
      padding: '4rem 3.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '10rem 3.5rem',
    },
  },
  title: {
    marginBottom: '1em',
    fontWeight: 700,
  },
  description: {
    marginBottom: '1.5em',
    color: '#889096'
  },
  bgImgContainer: {
    position: 'relative',
    height: '18rem',
    [theme.breakpoints.up('sm')]: {
      height: '25rem',
    },
    [theme.breakpoints.up('md')]: {
      height: 'auto'
    },
  },
  bgImg: {
    position: 'absolute !important',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: '-1',
  },
  joinUsBtn: {
    backgroundColor: primary,
    fontSize: 20,
    textTransform: "capitalize",
    padding: '7.5px 15px',
    '& a': {
      color: '#fff'
    },
    '&:hover': {
      backgroundColor: hoverPrimary
    }
  },
  links: {
    textDecoration: 'none',
    color: '#000'
  },
})

class BannerComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.infoContainer}>
            <Typography variant="h4" className={classes.title}>
              Impact the community
            </Typography>

            <Typography variant="body1" className={classes.description}>
              We are passionate about volunteering for underserved communities . We love to create code specific learning opportunities and bring the latest technologies to communities. We love to learn, share and code together. We love to give life to our ideas.
            </Typography>

            <Typography variant="body1" className={classes.description}>
              If you believe in Giving and have couple of hours to spare very week
              <br />
              If you are trustworthy, good communicator, independent and self-organised
            </Typography>

            <p>
              <Button className={classes.joinUsBtn}>
                <a href="#" className={classes.links}>Join Us</a>
              </Button>
            </p>
          </Grid>

          <Grid item xs={12} md={6} className={classes.bgImgContainer}>
            <BannerImage filename={'volunteer_cover.jpg'} classProps={classes.bgImg} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BannerComponent);