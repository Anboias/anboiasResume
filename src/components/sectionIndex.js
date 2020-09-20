import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const SectionIndex = ({ title, content }) => {
  return (
    <div className="col-lg-6 col-xs-12 px-3X my-3">
      <div className="section-index-title">
        <p className="mb-1 font-weight-bold">
          <FontAwesomeIcon icon={faCircle} color="#23395B" size="1x" /> {title}
        </p>
      </div>
      <div className="section-index-content">
        {content.split("\n").map(paragraph => {
          return <p className="text-secondary mb-2">{paragraph}</p>
        })}
      </div>
    </div>
  )
}


SectionIndex.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default SectionIndex
