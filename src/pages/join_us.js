import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import FooterComponent from '../components/home/footer/FooterComponent';

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const JoinUs = props => (
  <Layout>
    <SEO
      title="Join Us"
      keywords={['canvas', 'volunteer', 'singapore', 'computing']}
    />
    
    <FooterComponent data={props.data.site} />
  </Layout>
);

export default withRoot(JoinUs);

// Query for buildTime
export const pageQuery = graphql`
  query JoinUs_Query {
    site {
      buildTimeZone
    }
  }
`;
