import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import BannerComponent from '../components/BannerComponent';
import LookingAheadComponent from  '../components/LookingAheadComponent';

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['canvas', 'volunteer', 'singapore', 'computing']} />
    {/*<h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image filename={'gatsby-astronaut.png'}/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>*/}  

    <BannerComponent 
      title="Enriching the Community with Computing."
      description = "Every bits count."
      btnOneText = "Browse Events"
      btnOneLink = "events"
      btnTwoText = "Contact Us"
      btnTwoLink = "contact-us"
    />
    <LookingAheadComponent/>
  </Layout>
)

export default withRoot(IndexPage)
