import React from 'react'
import Logo from './Logo.png'

const Nav = () => {
  return (
    <div>     
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img src={Logo} alt="" width="150" height="30" className="d-inline-block align-text-top"/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">abc 1</a></li>
                        <li><a className="dropdown-item" href="#">abc 2</a></li>
                        <li><a className="dropdown-item" href="#">abc 3</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Company</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Example</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn m-1" type="submit">Log In</button>
                    <button className="btn m-1" type="submit">Get Started</button>
                    <button className="btn btn-dark m-1" type="submit">Book a Demo <i className="bi bi-arrow-up-right"></i> </button> 
                </form>
                </div>
            </div>
        </nav>     
    </div>
        
  )
}

export default Nav
