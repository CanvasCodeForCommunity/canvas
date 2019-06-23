import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import BannerComponent from '../components/home/banner/BannerComponent';
import AboutUsComponent from '../components/home/about_us/AboutUsComponent';
import FooterComponent from '../components/home/footer/FooterComponent';
import SignUpComponent from '../components/home/signup/SignUpComponent';
import SectionComponent from '../components/home/section/SectionComponent';
import TestimonialComponent from '../components/home/testimonial/TestimonialComponent';
import FeaturedPhotosComponent from '../components/home/featured_photos/FeaturedPhotosComponent';

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const IndexPage = props => (
  <Layout>
    <SEO
      title="CodeForCommunity"
      keywords={[
        'canvas',
        'volunteer',
        'singapore',
        'computing',
        'codeforcommunity',
      ]}
    />
    <BannerComponent
      title="Enriching the Community with Computing."
      description="Every {bits} counts."
      btnOneText="Browse Events"
      btnOneLink="events"
    />
    <SignUpComponent
      title="Sign up NOW to volunteer for the upcoming programs."
      btnText="Join us"
      btnLink="https://www.google.com"
    />
    <AboutUsComponent />
    <FeaturedPhotosComponent data={props.data.featuredPhotos} />
    <SectionComponent />
    <TestimonialComponent data={props.data.testimonial} />
    <FooterComponent data={props.data.site} />
  </Layout>
);

export default withRoot(IndexPage);

// Query for Testimonial
export const pageQuery = graphql`
  query TestimonialQuery {
    testimonial: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonial/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            quote
            cover_img {
              relativePath
            }
          }
        }
      }
    }

    featuredPhotos: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: {
        absolutePath: { regex: "/featured_photos/" }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          relativePath
          name
        }
      }
    }

    site {
      buildTimeZone
    }
  }
`;
