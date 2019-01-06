import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../../components/image';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
});

class EventCardComponent extends Component {
  
  render() {
    const { to, title, location, description, cover_img } = this.props;
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardActionArea component={Link} to={to}>
            <Image filename={cover_img} />
            <CardContent>
              <Typography variant="h6" component="h2">
                {title}
              </Typography>
              <Typography variant="body2">{location}</Typography>

              <Typography gutterBottom component="p" noWrap>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

EventCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover_img: PropTypes.string.isRequired,
};

//make this component available to the app
export default withStyles(styles)(EventCardComponent);
