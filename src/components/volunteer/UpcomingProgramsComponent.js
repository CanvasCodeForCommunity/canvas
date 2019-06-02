import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

import Image from '../commons/Image';
import { royalBlue } from '../../utils/Colors'

const styles = theme => ({
    root: {
        padding: '3rem 2rem 1rem 2rem',
        [theme.breakpoints.up('sm')]: {
            padding: '3rem 4rem 1rem 4rem'
        },
        [theme.breakpoints.up('md')]: {
            padding: '3rem 5rem 1rem 5rem'
        },
    },
    title: {
        marginBottom: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '2rem'
        },
    },
    programsContainer: {
        maxWidth: 1440,
        margin: '1rem auto'
    },
    programImageContainer: {
        padding: 12,
        [theme.breakpoints.up('sm')]: {
            paddingRight: 14
        },
    },
    programImage: {
        width: '100%',
        height: 150,
        [theme.breakpoints.up('sm')]: {
            height: 225
        },
        [theme.breakpoints.up('md')]: {
            height: 175
        },
        [theme.breakpoints.up('lg')]: {
            height: 225
        },
    },
    programTitle: {
        color: royalBlue
    },
    programDescriptionContainer: {
        padding: 12,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 14
        },
    },
})

class UpcomingProgramsComponent extends Component {
    programsContainer = (classes, programsData) => {
        const programs = programsData.edges

        return (
            programs.map((program, index) => (
                <React.Fragment>
                    <Grid item
                        className={classes.programImageContainer}
                        xs={12} md={5}
                    >
                        <Image filename={program.node.frontmatter.image.relativePath} classProps={classes.programImage} />
                    </Grid>

                    <Grid item
                        className={classes.programDescriptionContainer}
                        xs={12} md={6}
                    >
                        <Typography className={classes.programTitle} variant="h6" gutterBottom>{program.node.frontmatter.name}</Typography>
                        <Typography className={classes.programDescription} variant="body1" gutterBottom>
                            {program.node.frontmatter.description}
                        </Typography>
                        <Typography className={classes.programPeriod} variant="body1" color="textSecondary">
                            Period: {program.node.frontmatter.period}
                        </Typography>
                    </Grid>
                </React.Fragment>
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
                    Upcoming Programs
                </Typography>

                <Grid container
                    className={classes.programsContainer}
                    justify="center"
                    direction="row"
                >
                    {this.programsContainer(classes, programs)}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(UpcomingProgramsComponent);