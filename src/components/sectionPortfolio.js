import React from "react"
import { Link } from "gatsby"

const SectionPortfolio = ({ slug, title, publishedDate }) => {
  return (
    // <li className="post-custom">
       <Link to={"/blog/" + slug}>
     <div className="card" style={{ maxWidth: "200px"}}>
        <img className="card-img-top" src={null} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
        <h2>{title}</h2>
        <p>{publishedDate}</p>
      </Link>
    // </li>
  )
}

export default SectionPortfolio
