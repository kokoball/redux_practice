import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="product">product</Link>
        </li>
        <li>
          <Link to="option">option</Link>
        </li>
        <li>
          <Link to="item">item</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
