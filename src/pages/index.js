import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'

import BannerComponent from '../components/home/banner/BannerComponent';
import LookingAheadComponent from  '../components/home/looking_ahead/LookingAheadComponent';
import FeaturedEventsComponent from '../components/home/featured_events/FeaturedEventsComponent'
import AboutUsComponent from '../components/home/about_us/AboutUsComponent';
import PartnersComponent from '../components/home/partners/PartnersComponent';
import ContactUsComponent from '../components/home/contact_us/ContactUsComponent';
import FooterComponent from '../components/home/footer/FooterComponent';

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={['canvas', 'volunteer', 'singapore', 'computing']} />

    <BannerComponent 
      title="Enriching the Community with Computing."
      description = "Every bits count."
      btnOneText = "Browse Events"
      btnOneLink = "events"
      btnTwoText = "Contact Us"
      btnTwoLink = "contact-us"
    />
    <LookingAheadComponent/>
    <FeaturedEventsComponent data={props.data.featuredEvents}/>
    <AboutUsComponent/>
    <PartnersComponent/>
    <ContactUsComponent/>
    <FooterComponent data={props.data.site}/>

  </Layout>
)

export default withRoot(IndexPage)

// Query for Featured Events
export const pageQuery = graphql`
  query FeaturedEventsQuery {
    featuredEvents: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "\/featured_events/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
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
