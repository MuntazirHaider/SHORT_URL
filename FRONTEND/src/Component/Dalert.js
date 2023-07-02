import React from 'react'

const Alert = (props) => {

  return (
    <>
      <div className="alert alert-danger text-center" role="alert">
        <h4 className="alert-heading alert-danger">{props.title}</h4>
        <p>
          {props.desc}
        </p>
      </div>
    </>
  )
}

export default Alert