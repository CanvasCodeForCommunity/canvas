import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PictureWithWriteUpComponent from './PictureWithWriteUpComponent'
import PictureWithNameComponent from './PictureWithNameComponent'

const styles = theme => ({
  root: {
    position: 'relative',
    padding: '3.5rem 2rem 5rem 2rem',
    [theme.breakpoints.up('md')]: {
      padding: '3.5rem 5rem 5rem 5rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '3.5rem 5rem 7rem 5rem',
    },
  },
  titleDiv: {
    textAlign: 'center'
  },
  title: {
    fontWeight: 700
  },
  advisors: {
    marginTop: '2rem',
    marginBottom: '5rem'
  },
  advisorsInfo: {
    marginTop: '1.5rem'
  },
  operations: {
    marginTop: '2rem',
    marginBottom: '5rem'
  },
  partners: {
    marginTop: '2rem',
  },
  partnersInfo: {
    marginTop: '1.5rem'
  },
})

class TeamComponent extends Component {
  partnersComponent = (partnersData) => {
    const partners = partnersData.edges

    return (
      partners.map((partner, index) => (
        <PictureWithNameComponent
          name={partner.node.frontmatter.name}
          profilePicture={partner.node.frontmatter.profilePicture.relativePath}
          club={partner.node.frontmatter.club}
          role={partner.node.frontmatter.role}
        />
      ))
    )
  }

  render() {
    const { advisors, operations, partners } = this.props
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.titleDiv}>
          <Typography variant="h4" className={classes.title} gutterBottom>Meet the team!</Typography>
        </div>

        <div className={classes.teamInfo}>
          <div className={classes.advisors}>
            <Typography variant="h5" className={classes.title} gutterBottom>Advisors</Typography>
            <div className={classes.advisorsInfo}>
              <PictureWithWriteUpComponent
                info={advisors}
              />
            </div>
          </div>

          <div className={classes.operations}>
            <Typography variant="h5" className={classes.title} gutterBottom>Operations</Typography>
            <div className={classes.advisorsInfo}>
              <PictureWithWriteUpComponent
                info={operations}
              />
            </div>
          </div>

          <div className={classes.partners}>
            <Typography variant="h5" className={classes.title} gutterBottom>Our Partners</Typography>
            <Grid container spacing={24} className={classes.partnersInfo}>
              {this.partnersComponent(partners)}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TeamComponent);
