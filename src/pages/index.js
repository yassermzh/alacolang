import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Home from "../components/home"

// <SEO title="Home" />
const IndexPage = ({ data }) =>
  console.log("data=", data) || <Home data={data} />

export const query = graphql`
  query home {
    site {
      siteMetadata {
        description
      }
    }
    images: allFile(filter: { relativePath: { regex: "/story/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
