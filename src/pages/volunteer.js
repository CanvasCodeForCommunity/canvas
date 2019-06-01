import React, { Component } from 'react';
import { graphql } from 'gatsby';

import BannerComponent from '../components/volunteer/BannerComponent';
import RolesComponent from '../components/volunteer/RolesComponent';
import UpcomingProgramsComponent from '../components/volunteer/UpcomingProgramsComponent';
import PastProgramsComponent from '../components/volunteer/PastProgramsComponent';

import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../components/withRoot';

class VolunteerPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Volunteer"
          keywords={['canvas', 'volunteer', 'singapore', 'computing', 'NUS']}
        />

        <BannerComponent />
        <RolesComponent roles={this.props.data.roles} />
        <UpcomingProgramsComponent programs={this.props.data.upcomingPrograms} />
        <PastProgramsComponent programs={this.props.data.pastPrograms} />

      </Layout>
    );
  }
}

export default withRoot(VolunteerPage);

// Query for Roles and Past Events
export const pageQuery = graphql`
  query volunteerPageQuery {
    roles: allRolesJson {
      edges {
        node {
          name
          description
        }
      }
    }  
  
  upcomingPrograms: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/upcoming_programs/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            image {
              relativePath
            }
            description
            period
          }
        }
      }
    }
  
  pastPrograms: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/past_programs/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            image {
              relativePath
            }
          }
        }
      }
    }
  }
`;