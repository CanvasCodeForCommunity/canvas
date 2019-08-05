import React, { Component } from 'react';
import { graphql } from 'gatsby';

import BannerComponent from '../components/programmes/BannerComponent';
import RolesComponent from '../components/programmes/RolesComponent';
import VolunteerProgramsComponent from '../components/programmes/VolunteerProgramsComponent';
import UpcomingProgramsComponent from '../components/programmes/UpcomingProgramsComponent';
import PastProgramsComponent from '../components/programmes/PastProgramsComponent';
import FooterComponent from '../components/home/footer/FooterComponent';

import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../components/withRoot';

class ProgrammesPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Volunteer"
          keywords={['canvas', 'programmes', 'singapore', 'computing', 'NUS']}
        />

        <BannerComponent
          title="Enriching the Community with Computing."
          btnOneText="Browse Events"
          btnOneLink="events"
        />
        <RolesComponent roles={this.props.data.roles} />
        <VolunteerProgramsComponent data={this.props.data.volunteerPrograms} />
        <UpcomingProgramsComponent
          programs={this.props.data.upcomingPrograms}
        />
        <PastProgramsComponent programs={this.props.data.pastPrograms} />
        <FooterComponent data={this.props.data.site} />
      </Layout>
    );
  }
}

export default withRoot(ProgrammesPage);

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
      filter: { fileAbsolutePath: { regex: "/upcoming_programs/" } }
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
      filter: { fileAbsolutePath: { regex: "/past_programs/" } }
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
      filter: { fileAbsolutePath: { regex: "/volunteer_programs/" } }
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
