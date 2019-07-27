import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Image from '../commons/Image';
import { primary, hoverPrimary } from '../../utils/Colors';

const ExpansionPanel = withStyles({
  root: {
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const styles = theme => ({
  root: {
    padding: '3rem 2rem 1rem 2rem',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem 4rem 1rem 4rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '3rem 5rem 1rem 5rem',
    },
  },
  title: {
    marginBottom: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '2rem',
    },
  },
  panelTitleContainer: {
    padding: '0.5rem 1rem 0.5rem 1rem',
  },
  description: {
    textAlign: 'justify',
  },
  btnAlign: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  joinUsBtn: {
    backgroundColor: primary,
    fontSize: 20,
    textTransform: 'capitalize',
    padding: '7.5px 15px',
    '& a': {
      color: 'white',
    },
    '&:hover': {
      backgroundColor: hoverPrimary,
    },
  },
  links: {
    textDecoration: 'none',
    color: 'black',
  },
  programImage: {
    width: '100%',
    height: 200,
    [theme.breakpoints.up('lg')]: {
      height: 250,
    },
    [theme.breakpoints.up('xl')]: {
      height: 325,
    },
  },
});

class VolunteerProgramsComponent extends Component {
  programsComponent = (classes, programData) => {
    const program = programData.edges;

    return program.map((coder, index) => (
      <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
        <Card>
          <Image
            filename={coder.node.frontmatter.image.relativePath}
            classProps={classes.programImage}
          />
          <ExpansionPanel>
            <ExpansionPanelSummary
              className={classes.panelTitleContainer}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h7" noWrap>
                {coder.node.frontmatter.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography
                className={classes.description}
                variant="body2"
                gutterBottom
              >
                {coder.node.frontmatter.description}
              </Typography>
            </ExpansionPanelDetails>
            <Typography className={classes.btnAlign}>
              <Button className={classes.joinUsBtn}>
                <a href="#" className={classes.links}>
                  Join Us
                </a>
              </Button>
            </Typography>
          </ExpansionPanel>
        </Card>
      </Grid>
    ));
  };

  render() {
    const { classes } = this.props;
    const { data } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h5" align="center">
          Volunteer Programmes
        </Typography>
        <Grid container className={classes.programmeContainer} spacing={40}>
          {this.programsComponent(classes, data)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(VolunteerProgramsComponent);
