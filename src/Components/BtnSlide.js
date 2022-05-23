import React, {useState} from 'react'

export const BtnSlide = () => {
    const [ident, setIdentificador] = useState({
        identificador: 'Inicio',
        identName: 'Herramientas', 
        index: 0, 
        classProp:'btn transition'
    });
    const {identificador, index, classProp,  identName} = ident;

    //Funcion del boton para desplazarse
    const slideBtn = ()=>{
        if(index === 0){
            setIdentificador({identificador: 'Herramientas',identName:'Funciones', index: 1, classProp: 'btn transition'})
        }else if(index ===1){
            setIdentificador({identificador:'Funciones', identName:'Inicio', index:2, classProp: 'btn transition disapear'})
        }else{
            setIdentificador({identificador:'Inicio', identName:'Herramientas', index:0, classProp: 'btn transition'})
        }
    }
  return (
     <a className={classProp} id='btn-slide' onClick={slideBtn} href={'#' + identificador}>{identName} <i className="fa-solid fa-chevron-down"></i></a>
  )
}
