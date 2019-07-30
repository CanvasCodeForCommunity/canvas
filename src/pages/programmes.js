import React, { Component } from 'react';
import { graphql } from 'gatsby';

import BannerComponent from '../components/volunteer/BannerComponent';
import RolesComponent from '../components/volunteer/RolesComponent';
import VolunteerProgramsComponent from '../components/volunteer/VolunteerProgramsComponent';
import UpcomingProgramsComponent from '../components/volunteer/UpcomingProgramsComponent';
import PastProgramsComponent from '../components/volunteer/PastProgramsComponent';
import FooterComponent from '../components/home/footer/FooterComponent'

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
        <VolunteerProgramsComponent data={this.props.data.volunteerPrograms} />
        <UpcomingProgramsComponent programs={this.props.data.upcomingPrograms} />
        <PastProgramsComponent programs={this.props.data.pastPrograms} />
        <FooterComponent data={this.props.data.site} />

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

    volunteerPrograms: allMarkdownRemark(
      filter: { 
        fileAbsolutePath: {regex: "/volunteer_programs/"} 
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            image {
              relativePath
            }
            description
          }
        }
      }
    }

    site {
      buildTimeZone
    }
  }
`;