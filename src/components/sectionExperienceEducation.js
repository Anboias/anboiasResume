import React from 'react'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBirthdayCake, faCircle } from "@fortawesome/free-solid-svg-icons"

const SectionExperienceEducation = () => {
    
    return (
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "#0B3954", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0B3954" }}
          date="Jun 2017 - present"
          iconStyle={{ backgroundColor: "#0B3954", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Integration Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Anboias SRL, Cluj-Napoca
          </h4>

          <p>
            I am the administrator of my own firm, but colaborating with an
            outsourcing company from Cluj-Napoca. The final client for which I
            am working is based in Sweden, and is a subsidiary of the largest
            pharmaceutical operator in Europe, with branches all over the
            continent.
          </p>
          <p>
            As an Integration Developer, I am responsible for interconnecting
            two or more systems that want to send data to each other. I work
            with all known data types and protocols. To establish a connection
            between systems and create a new integration, I must first gather
            all the required information from the parties involved, design the
            most appropriate architecture for the elements involved, and do the
            development. I am documenting and testing my own work, while keeping
            it under version control during the entire development process.
          </p>
          <p>
            Some of the tools and technologies used:
            <br />
            Axway B2Bi, WSO2 API AM, Java, EDI, Jenkins, Java, Groovy, regex,
            Excel, SoapUI, Postman, FileZilla
          </p>
        </VerticalTimelineElement>
    )
}

export default SectionExperienceEducation;