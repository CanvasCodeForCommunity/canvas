import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
import SEO from '../components/seo';

import TopComponent from '../components/about/TopComponent';
import TeamComponent from '../components/about/TeamComponent';

import withRoot from '../components/withRoot';

const styles = theme => ({

})

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={['canvas', 'volunteer', 'singapore', 'computing']}
        />
        <TopComponent />
        <TeamComponent
          advisors={this.props.data.advisors}
          operations={this.props.data.operations}
          partners={this.props.data.partners}
        />
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(AboutPage));

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
            club
            role
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