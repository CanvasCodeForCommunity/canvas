import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import YoungCoderComponent from '../components/young_coder/YoungCoderComponent';
import FooterComponent from '../components/home/footer/FooterComponent';

import 'typeface-roboto';

import withRoot from '../components/withRoot';

const IndexPage = props => (
  <Layout>
    <SEO
      title="Young Coder"
      keywords={['canvas', 'volunteer', 'singapore', 'computing']}
    />
    <YoungCoderComponent />
    <FooterComponent data={props.data.site} />
  </Layout>
);

export default withRoot(IndexPage);

// Query for buildTime
export const pageQuery = graphql`
  query Young_Coder_Query {
    site {
      buildTimeZone
    }
  }
`;
