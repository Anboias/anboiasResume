import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const SectionIndex = ({ title, content }) => {
  return (
    <div className="col-6 px-3 my-3">
      <div className="section-index-title">
        <p className="mb-1 font-weight-bold">
          <FontAwesomeIcon icon={faCircle} color="#23395B" size="1x" /> {title}
        </p>
      </div>
      <div className="section-index-content">
        <p className="text-secondary">{content}</p>
      </div>
    </div>
  )
}

export default SectionIndex
