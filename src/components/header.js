import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"



const Header = ({className}) => {
  const images = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 181) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return <header className={className}>
    <Img className="mt-4 ml-4 w-1/4" style={{maxWidth:181}} fluid={images.logo.childImageSharp.fluid} />
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
