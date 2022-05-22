import React from 'react'

export const OffCanvas = ({title, datos={Herramienta:'Sin herramienta', Comando:'', Descripcion:"La herramienta no cuenta con una descripción", img:"https://res.cloudinary.com/dfxizywkv/image/upload/v1652995857/no-example_jr4rrz.svg"}}) => {
  return (
      <div  className="offcanvas offcanvas-start canvas" tabIndex="-1" id={title} aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">{datos.Herramienta}      <small>{datos.Comando}</small></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <div>
                  {datos.Descripcion}
              </div>
              <img src={datos.img} className='card-img' alt='...'/>
          </div>
      </div>
  )
}
