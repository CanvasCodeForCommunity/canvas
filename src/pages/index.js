import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Banner from '../components/Banner';

import 'typeface-roboto';

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

    <Banner 
      title="Enriching the Community with Computing."
      description = "Every bits count."
      btnOneText = "Browse Events"
      btnOneLink = "events"
      btnTwoText = "Contact Us"
      btnTwoLink = "contact-us"
    />
  </Layout>
)

export default IndexPage
