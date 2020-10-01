import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const SectionPortfolio = ({ title, slug, description, image }) => {
  return (
    <div className="card mr-3 mt-auto" style={{width: "18rem", display: "inline-block"}}>
      <Link to={`/portfolio/${slug}`} className="card__image">
        <Img fluid={image.fluid} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Src: {image.src}</p>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  )
}

export default SectionPortfolio
