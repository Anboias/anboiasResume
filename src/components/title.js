import React from "react"

const Title = ({ title }) => {
  return (
    <div className="col-12 ">
      <div className="mx-auto  w-auto">
        <h2 className="mb-0 pb-1 pt-0 border-bottom border-warning d-inline-block">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default Title
