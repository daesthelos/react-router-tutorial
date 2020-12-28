import React from 'react'
import { Link } from 'react-router-dom'

const ComponentOne = (props, ref) => {
  return (
    <>
      Child Component One
      <Link to="/two">
        Component Two
      </Link>
      <Link to="/three">
        Component Three
      </Link>
    </>
  )
}

export default ComponentOne;