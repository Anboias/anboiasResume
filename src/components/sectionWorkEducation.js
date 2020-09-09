import React from "react"
import PropTypes from "prop-types"
import { Pen } from "../media/svg/pen"

import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCircle } from "@fortawesome/free-solid-svg-icons"

const SectionWorkEducation = ({
  title,
  subtitle,
  content,
  type,
  dateFrom,
  dateTo,
}) => {
  // const customColor = type === "work" ? "#0B3954" : "#CA054D"
  // GENIAL ALBASTTRUL: #284b63
  // const customBackgroundColorCard = type === "work" ? "#dd5e60" : "#4787bf" // misto culori - steelblue si indianred
  const customBackgroundColorCard = type === "work" ? "#f4f4f4" : "#f4f4f4" // whitesmoke
  const customBackgroundColorIcon = type !== "work" ? "#dd5e60" : "#4787bf"
  const customFontColorCard = type === "work" ? "#555" : "#555"
  const customFontColorIcon = type === "work" ? "#aea" : "red"

  return (
    <VerticalTimelineElement
      className={"vertical-timeline-element--" + type}
      contentStyle={{
        backgroundColor: `${customBackgroundColorCard}`,
        color: `${customFontColorCard}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${customBackgroundColorCard}`,
      }}
      date={dateFrom + " - " + dateTo}
      iconStyle={{
        backgroundColor: `${customBackgroundColorIcon}`,
        color: `${customFontColorIcon}`,
      }}
      icon={null}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>

      <p>{content}</p>
    </VerticalTimelineElement>
  )
}

SectionWorkEducation.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
}

export default SectionWorkEducation
