import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.logo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/">Notes</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            course
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Python</a></li>
            <li><a className="dropdown-item" href="/">MongoDB</a></li>
            <li><a className="dropdown-item" href="/">Sql</a></li>
            <li><a className="dropdown-item" href="/">Chatgpt</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/" aria-disabled="true">Projects</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
        <button type="button" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
</svg>
            </button>
      </form>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype = {
    logo:PropTypes.string.isRequired,
}
