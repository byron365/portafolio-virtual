import React from 'react'

export const Hability = ({datos}) => {
  return (
    <div className='habilityItem'> 
        <h4><i className={datos.icon}></i>{datos.titulo}</h4>
        <div className='barCnt'>
            <div className='bar' style={{width: datos.percent + '%'}}></div>
            <p>{datos.level}</p>
        </div>
        <p className='descrip'>
            {datos.descripcion}
        </p>
    </div>
  )
}
