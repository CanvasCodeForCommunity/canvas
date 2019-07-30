import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Image from '../commons/Image'

const styles = theme => ({
  profileImage: {
    borderRadius: '50%',
    width: '6rem',
    height: '6rem',
    [theme.breakpoints.up('md')]: {
      width: '6.75rem',
      height: '6.75rem'
    },
  },
  name: {
    fontWeight: 700,
    marginTop: '1.5em',
    [theme.breakpoints.up('sm')]: {
      marginTop: 0
    }
  },
  role: {
    marginBottom: '0.75em',
    color: '#9e9e9e',
    fontStyle: 'italic',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '1.25em',
    }
  }
})

class TeamHorizontalCardComponent extends Component {
  createGridItems = (classes, data) => {
    const info = data.edges;

    return (
      info.map((i, index) => (
        <Grid item xs={12} sm={9} key={index}>
          <div className={classes.root}>
            <Grid container>
              <Grid item sm={4} lg={3}>
                <Image filename={i.node.frontmatter.profilePicture.relativePath} classProps={classes.profileImage} />
              </Grid>

              <Grid item sm={8} lg={9}>
                <Typography variant="body1" className={classes.name}>{i.node.frontmatter.name}</Typography>
                <Typography variant="subtitle2" className={classes.role}>{i.node.frontmatter.role}</Typography>

                {
                  i.node.frontmatter.description.split('\n').map(function (item, idx) {
                    return (
                      <React.Fragment key={idx}>
                        <Typography variant="body2">
                          {item}
                        </Typography>
                        <br />
                      </React.Fragment>
                    )
                  })
                }

              </Grid>
            </Grid>
          </div>
        </Grid >
      ))
    )
  }

  render() {
    const { info } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={40}>
          {this.createGridItems(classes, info)}
        </Grid>
      </div>
    );
  }
}

TeamHorizontalCardComponent.propTypes = {
  info: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamHorizontalCardComponent);
