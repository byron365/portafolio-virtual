import React from 'react'
import { Hability } from './Hability'
import Habilities from '../Transcriptions/Habilities.json'
export const Home = () => {
  return (
    <div className='container mt-3 cv'>
      {/* encabezado */}
      <div className='encabezado'>
        <div className='imgCnt'>
          <img src='https://res.cloudinary.com/dfxizywkv/image/upload/v1653323276/img/perfil_eqohzz.png' />
          <h2>BAIRON JAFET PREZA ALAS</h2>
        </div>

        <div className='aboutMeCnt'>
          <div className='aboutMe'>
            <h4>SOBRE MI</h4>
            <p>Estudiante de Ingeniería
              Mecatrónica.<br />
              Me considero una persona
              responsable y puntual, con
              ganas de aprender y
              ganar experiencia. <br />
              Autodidacta con habilidades en programación Front-end
              y Back-end con tegnología
              en node-js y el uso de
              Office.</p>
          </div>

          <div className='contact'>
            <h4>CONTACTO</h4>
            <ul>
              <li><i className="fa-solid fa-phone"></i>7858-0153</li>
              <li><i className="fa-solid fa-envelope"></i>byronalas365@gmail.com</li>
              <li><i className="fa-solid fa-location-dot"></i>Villa Primavera, <br />Quezaltepeque, La Libertad.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cuerpo */}
      <div className='references'>
        <div className='personalInfo'>
            <div>
              <h4>ESTUDIOS</h4>
             <p>
               <strong>Universidad Don Bosco</strong><br/>
               Carrera de Ingeniería Mecatrónica, en curso.
               <br/>
               <strong>Colegio Res. villa primavera</strong><br/>
               2017-2018<br/>
               Bachiller con orientación en Inglés.
              </p>  
            </div>

            <div>
              <h4>IDIOMA</h4>
              Inglés Básico-Intermedio con certificado A1 en Busuu McGraw Hill.<br/>
              Español nativo.
            </div>

            <div>
              <h4>CARACTERÍSTICAS PERSONALES</h4>
              Responsable.<br/>
              Puntual.<br/>
              Colaborador.<br/>
              Con deseos de superarse y obtener nuevos conocimientos y experiencias.
            </div>
        </div>
          <hr/>

        <div className='habilities'>
          {
            Habilities.map(h=>{
              return(
                <Hability key={h.titulo} datos={h}/>
              )
            })
          }
        </div>
      </div>

    </div>

  )
}
