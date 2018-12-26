import React, { Component } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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

class IndividualEvent extends Component {
  render() {
    const { classes } = this.props;
    const { data } = this.props;
    const event = data.event.frontmatter;
    const images = data.images.edges;
    return (
      <Layout>
        <SEO title="Events" />
        <div className={classes.root}>
          <span>{event.title}</span>
          <span>{event.description}</span>
          <span>{event.location}</span>
        </div>
      </Layout>
    );
  }
}

//make this component available to the app
export default withStyles(styles)(IndividualEvent);

//query for index.md for that event and the images with it.
export const pageQuery = graphql`
  query EventPostBySlug($slug: String!, $absolutePathRegex: String!) {
    event: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        location
      }
    }

    images: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
