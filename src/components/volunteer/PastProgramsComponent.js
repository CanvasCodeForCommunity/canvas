import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import Image from '../commons/Image';

const styles = theme => ({
  root: {
    padding: '3rem 2rem 4rem 2rem',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem 4rem 4rem 4rem'
    },
    [theme.breakpoints.up('md')]: {
      padding: '3rem 5rem 4rem 5rem'
    },
  },
  title: {
    marginBottom: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '2rem'
    },
  },
  programImage: {
    width: '100%',
    height: 200,
    [theme.breakpoints.up('lg')]: {
      height: 250
    },
    [theme.breakpoints.up('xl')]: {
      height: 325
    },
  },
  programDetailsContainer: {
    padding: '1.5rem 1rem 1.25rem 1rem'
  }
})

class PastProgramsComponent extends Component {
  programsComponent = (classes, programsData) => {
    const programs = programsData.edges

    return (
      programs.map((program, index) => (
        <Grid item
          xs={12} sm={6} md={4} xl={3}
          key={index}
        >
          <Card>
            <CardActionArea>
              <Image filename={program.node.frontmatter.image.relativePath} classProps={classes.programImage} />

              <CardContent className={classes.programDetailsContainer}>
                <Typography gutterBottom variant="body1">
                  {program.node.frontmatter.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))
    )
  }

  render() {
    const { programs } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          className={classes.title}
          variant="h5"
          align="center"
        >
          Programs in the Past
        </Typography>

        <Grid container
          className={classes.pastProgramsContainer}
          spacing={40}
        >
          {this.programsComponent(classes, programs)}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PastProgramsComponent);