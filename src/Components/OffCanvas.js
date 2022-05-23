import React from 'react'

export const OffCanvas = ({title, datos}) => {
    const {Herramienta, Comando, Descripcion, img} = datos;
  return (
      <div  className="offcanvas offcanvas-start canvas" tabIndex="-1" id={title} aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">{Herramienta}      <small>{Comando}</small></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <div>
                  {Descripcion}
              </div>
              <img src={img} className='card-img' alt='...'/>
          </div>
      </div>
  )
}
