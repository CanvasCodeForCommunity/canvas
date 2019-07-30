import React, { Component } from 'react';
import { graphql } from 'gatsby';

import BannerComponent from '../components/about/BannerComponent';
import TeamComponent from '../components/about/TeamComponent';
import FooterComponent from '../components/home/footer/FooterComponent';

import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../components/withRoot';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={['canvas', 'volunteer', 'singapore', 'computing']}
        />
        <BannerComponent />
        <TeamComponent
          advisors={this.props.data.advisors}
          operations={this.props.data.operations}
          partners={this.props.data.partners}
        />
        <FooterComponent data={this.props.data.site} />
      </Layout>
    );
  }
}

export default withRoot(AboutPage);

// Team Query
export const pageQuery = graphql`
  query teamQuery {
    advisors: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/advisors/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            description
            profilePicture {
              relativePath
            }
          }
        }
      }
    }
  
  	operations: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/operations/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            description
            profilePicture {
              relativePath
            }
          }
        }
      }
    }
  
  	partners: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/partners/"}
      }
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            profilePicture {
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