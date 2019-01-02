import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BannerComponent from '../components/BannerComponent';
import LookingAheadComponent from  '../components/LookingAheadComponent';
import FeaturedEventsComponent from '../components/FeaturedEventsComponent'

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const IndexPage = () => (
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
    <FeaturedEventsComponent/>

  </Layout>
)

export default withRoot(IndexPage)
