import React from 'react'
import './404.css'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className="containerError">
      <p className="header">
        The page you are searching for doesn't seem to exist
      </p>
      <Link to='/custom' className='backTomain' >
        Back To Main Page
      </Link>
    </div>
  );
}

export default Error