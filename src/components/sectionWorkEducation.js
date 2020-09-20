import React from "react"
import PropTypes from "prop-types"

import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import SchoolIcon from "@material-ui/icons/School"

const SectionWorkEducation = ({
  title,
  subtitle,
  content,
  type,
  dateFrom,
  dateTo,
}) => {
  const customBackgroundColorCard = type === "work" ? "#f4f4f4" : "#f4f4f4" // whitesmoke
  const customBackgroundColorIcon = type === "work" ? "#4787bf" : "#dd5e60"
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
      icon={
        type === "work" ? (
          <BusinessCenterIcon style={{ color: "white" }} />
        ) : (
          <SchoolIcon style={{ color: "white" }} />
        )
      }
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>

      {content.split("\n").map(paragraph => {
        return <p>{paragraph}</p>
      })}
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
