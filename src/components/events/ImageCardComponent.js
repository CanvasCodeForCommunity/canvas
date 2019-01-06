import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../../components/image';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
});

class ImageCardComponent extends Component {
  
  render() {
    const { cover_img } = this.props;
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <Image filename={cover_img} />
            
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

ImageCardComponent.propTypes = {
  cover_img: PropTypes.string.isRequired
};

//make this component available to the app
export default withStyles(styles)(ImageCardComponent);
