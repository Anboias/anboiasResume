import React from "react"
// import { Link } from "gatsby"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBirthdayCake, faCircle } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Head from "../components/head"
import SectionExperienceEducation from "../components/sectionExperienceEducation"

const ExperienceEducation = () => {
  return (
    <Layout>
      <Head title="About" />
      <VerticalTimeline>
        <SectionExperienceEducation />
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

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "#0B3954", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0B3954" }}
          date="Jan 2017 - Jun 2017"
          iconStyle={{ backgroundColor: "#0B3954", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">COBOL Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fortech SRL, Cluj-Napoca
          </h4>
          <p>
            My first job in IT, obtained after following a 5-week pre-employment
            training.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Oct 2017 - Jun 2020"
          iconStyle={{ backgroundColor: "#CA054D", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">
            Babeș-Bolyai University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>
            Studied Economic Informatics. Learned JavaScript, HTML, CSS, Java,
            C, SQL and NoSq databases, Operating Systems, Networking
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2020 - Mar 2020"
          iconStyle={{ backgroundColor: "#CA054D", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">Free Code Camp</h3>
          <h4 className="vertical-timeline-element-subtitle">Online courses</h4>
          <p>
            JavaScript Algorithms and Data Structures
            <br />
            <span className="font-italic">
              https://www.freecodecamp.org/certification/anboias/javascript-algorithms-and-data-structures
            </span>
          </p>
          <p>
            Responsive Web Design
            <br />
            <span className="font-italic">
              https://www.freecodecamp.org/certification/anboias/responsive-web-design
            </span>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2019"
          iconStyle={{ backgroundColor: "#CA054D", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">
            Project Management Fundamentals. Tools & Techniques
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Course</h4>
          <p>EDU EUPC</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2016 - Feb 2017"
          iconStyle={{ backgroundColor: "#CA054D", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">Academy+Plus</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer, Computer Programming
          </h4>
          <p>
            Programming school partnered with École 42 from Paris. Studied C
            language.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2005 - Jun 2009"
          iconStyle={{ backgroundColor: "#CA054D", color: "#fff" }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">
            Colegiul Silvic "Bucovina", Câmpulung Moldovenesc
          </h3>
          <h4 className="vertical-timeline-element-subtitle">High School</h4>
          <p>Economics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={null}
        />
        <br />
      </VerticalTimeline>
    </Layout>
  )
}

export default ExperienceEducation
