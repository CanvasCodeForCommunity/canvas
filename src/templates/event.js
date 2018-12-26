import React, { Component } from 'react'

class Event extends Component {
 
  render() {
    const { data } = this.props;
    console.log('data', data)
    const event = data.event.frontmatter;
    const images = data.images.edges;
    return (
      <div>
        <span>{event.title}</span>
        <span>{event.description}</span>
        <span>{event.location}</span>
      </div>
    )
  }
}

//make this component available to the app
export default Event

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
`
