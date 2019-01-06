import React, { Component } from 'react';

import FeaturedEventCarouselComponent from './FeaturedEventCarouselComponent'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import '../../../css/carousel.css'

class FeaturedEventsComponent extends Component {

  featuredEventsCarousel = (data) => {
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
      <div className={classes.root}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={4000}
        >
          {this.featuredEventsCarousel(data)}
        </Carousel>
      </div>
    )
  }
}


export default FeaturedEventsComponent;
