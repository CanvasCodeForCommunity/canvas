import React, { Component } from 'react';

import FeaturedEventCarouselComponent from './FeaturedEventCarouselComponent'

import { withStyles } from '@material-ui/core/styles';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import '../css/carousel.css'

const styles = theme => ({
  root: {

  }
})

class FeaturedEventsComponent extends Component {
  
  featuredEventsCarousel = (classes, data) => {
    const featuredEvents = data.edges;

    return (
        featuredEvents.map((featuredEvent, index) => (
          <FeaturedEventCarouselComponent
            title={featuredEvent.node.frontmatter.title}
            backgroundImagePath={featuredEvent.node.frontmatter.cover_img.relativePath}
          />
        ))
    )
  };
  
  render() {
    const { data } = this.props;
    const { classes } = this.props;

    return (
      <div className = {classes.root}>
        <Carousel 
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={4000}
        >
          {this.featuredEventsCarousel(classes, data)}
        </Carousel>
      </div>
    )
  }
}


export default withStyles(styles)(FeaturedEventsComponent);
