import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <Link to='/home' className="navbar-brand">My Resumen</Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <Link to='/' className="nav-link green-ligth transition" aria-current="page">Inicio</Link>
                      <Link to='/excelnotes' className="nav-link green-ligth transition">Notas de Excel</Link>
                      <Link to='/proyectos' className="nav-link green-ligth transition">Proyectos</Link>
                  </div>
              </div>
          </div>
      </nav>
  )
}
