import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>The page you're looking for does not exist</p>
      <Link to="/"> Back to Home </Link>
    </div>
  )
}

export default NotFound
