import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
import SEO from '../components/seo';

import EventCardComponent from '../components/events/EventCardComponent';
import EventHeaderComponent from '../components/events/EventHeaderComponent';

import withRoot from '../components/withRoot';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class EventsPage extends Component {

  eventsGrid = (classes, data) => {
    const events = data.events.edges;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {events.map((event, index) => (
            <EventCardComponent
              key={index}
              to={event.node.fields.slug}
              title={event.node.frontmatter.title}
              location={event.node.frontmatter.location}
              description={event.node.frontmatter.description}
              cover_img={event.node.frontmatter.cover_img.relativePath}
            />
          ))}
        </Grid>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Events" />
        <EventHeaderComponent
          siteTitle={'Events'}
          siteSecondaryTitle={'Past and present events'}
        />
        {this.eventsGrid(classes, data)}
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(EventsPage));

export const pageQuery = graphql`
  query HomeQuery {
    events: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: {regex: "//events/"}
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            description
            location
            cover_img {
              relativePath
            }
          }
        }
      }
    }
  }
`;
