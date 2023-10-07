import React from 'react'
import Proptypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://developeryogesh.netlify.app" rel="noreferrer" target='_blank'>Personal Portfolio</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://yogeshnext.netlify.app" rel="noreferrer" target='_blank'>Next APP</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://jobsarkari.netlify.app" rel="noreferrer" target='_blank'>Job Sarkari</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://letsbuildprojects.netlify.app" rel="noreferrer" target='_blank'>Let's Build Projects</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://dailycart.netlify.app" rel="noreferrer" target='_blank'>Daily Cart</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://textflix.netlify.app" rel="noreferrer" target='_blank'>TextFlix</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://bcaacademy.netlify.app" rel="noreferrer" target='_blank'>BCA Notes</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://bcaquestionpaper.netlify.app" rel="noreferrer" target='_blank'>BCA Question Paper</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.prototype = {
    title: Proptypes.string.isRequired
}
Navbar.defaultProps = {
    title: "My app"
}