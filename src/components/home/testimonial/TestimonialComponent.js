import React, { Component } from 'react';

import TestimonialCarouselComponent from './TestimonialCarouselComponent'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import '../../../css/carousel.css'

class TestimonialComponent extends Component {

  testimonialCarousel = (data) => {
    const testimonials = data.edges;

    return (
      testimonials.map((testimonial, index) => (
        <TestimonialCarouselComponent
          name={testimonial.node.frontmatter.name}
          quote={testimonial.node.frontmatter.quote}
          backgroundImagePath={testimonial.node.frontmatter.cover_img.relativePath}
        />
      ))
    )
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={4000}
        >
          {this.testimonialCarousel(data)}
        </Carousel>
      </div>
    )
  }
}


export default TestimonialComponent;
