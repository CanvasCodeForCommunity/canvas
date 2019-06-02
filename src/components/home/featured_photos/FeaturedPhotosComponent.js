import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import ImageCardComponent from './ImageCardComponent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: '2rem 1rem 2rem 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem 1rem 3rem 1rem', //top right bottom left
    },
    [theme.breakpoints.up('md')]: {
      padding: '3rem 6rem 3rem 6rem', //top right bottom left
    },
  },
  card: {
    maxWidth: 400,
  },
});

class FeaturedPhotosComponent extends Component {
  createImageGrid = (classes, images) => {
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          {images.map((image, index) => (
            <ImageCardComponent cover_img={image.node.relativePath} />
          ))}
        </Grid>
      </div>
    );
  };
  render() {
    const { classes, data } = this.props;
    return <div>{this.createImageGrid(classes, data.edges)}</div>;
  }
}

export default withStyles(styles)(FeaturedPhotosComponent);
