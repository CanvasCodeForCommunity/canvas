import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import BannerComponent from '../components/home/banner/BannerComponent';
import LookingAheadComponent from '../components/home/looking_ahead/LookingAheadComponent';
import FeaturedEventsComponent from '../components/home/featured_events/FeaturedEventsComponent';
import AboutUsComponent from '../components/home/about_us/AboutUsComponent';
import PartnersComponent from '../components/home/partners/PartnersComponent';
import ContactUsComponent from '../components/home/contact_us/ContactUsComponent';
import FooterComponent from '../components/home/footer/FooterComponent';
import SignUpComponent from '../components/home/signup/SignUpComponent';
import SectionComponent from '../components/home/section/SectionComponent';
import TestimonialComponent from '../components/home/testimonial/TestimonialComponent';

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const IndexPage = props => (
  <Layout>
    <SEO
      title="CodeForCommunity"
      keywords={['canvas', 'volunteer', 'singapore', 'computing']}
    />
    <BannerComponent
      title="Enriching the Community with Computing."
      description="Every bits count."
      btnOneText="Browse Events"
      btnOneLink="events"
      btnTwoText="Contact Us"
      btnTwoLink="contact-us"
    />
    <SignUpComponent
      title="SignUp NOW to volunteer for the upcoming programs."
      btnText="Join us"
      btnLink="https://www.google.com"
    />
    <AboutUsComponent />
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
    site {
      buildTimeZone
    }
  }
`;
