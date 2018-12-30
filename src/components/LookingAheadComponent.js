import React, { Component } from 'react';
import Image from '../components/image'

import { primary } from '../utils/Colors';
import ValuesComponent from './ValuesComponent';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        padding: '4rem 2rem 4rem 2rem',
        textAlign: 'center',
    },
    title: {
        color: primary,
        fontSize: '1.75rem',
        fontWeight: 700,
        marginBottom: '1.5em',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.125rem',
            lineHeight: 1.5
        },
    },
    iconImage: {
        maxHeight: '100%',
        '& img': {
            objectFit: 'contain !important'
        }
    }
})

class LookingAheadComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>Looking Ahead</Typography>
        <Grid container justify="space-around">
            <ValuesComponent
                title="Mission"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sodales leo, vitae ornare ex. Fusce vitae consectetur nulla, eget molestie purus. Curabitur faucibus nisi cursus, ullamcorper purus quis, tempus velit. Aenean molestie, risus eu lobortis venenatis, elit felis congue neque, sit amet vehicula dolor dolor sit amet nisl"
                Icon={<Image filename={'mission.png'} classProps={classes.iconImage}/>}
            />
            <ValuesComponent
                title="Vision"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sodales leo, vitae ornare ex. Fusce vitae consectetur nulla, eget molestie purus. Curabitur faucibus nisi cursus, ullamcorper purus quis, tempus velit. Aenean molestie, risus eu lobortis venenatis, elit felis congue neque, sit amet vehicula dolor dolor sit amet nisl"
                Icon={<Image filename={'vision.png'} classProps={classes.iconImage}/>}
            />
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(LookingAheadComponent);