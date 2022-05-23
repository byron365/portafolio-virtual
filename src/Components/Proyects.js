import React from 'react'

export const Proyects = () => {
  return (
    <div className='container mt-3'>
      <button className="category-item transition item-proyect" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProyect" aria-expanded="false" aria-controls="collapseProyect">
        DLMP3
      </button>
      <hr/>
      <div className="collapse" id="collapseProyect">
        <div className="card card-body">
          <h4>Descripción:</h4><br/>
          <p>
            <a href='https://dlmp3-proyect.herokuapp.com/home' target='_blank'><strong>DLMP3</strong></a> es una página web con la que puedes descargar musica y videos desde YouTube, 
            únicamente ingresando la url del video y seleccionando el formato deseado, 
            entre los formatos de audio que se pueden descargar estan: mp3, wma, aac, ogg, 
            flac, para los formatos de video: mp4, avi wmv, mov, mkv, ademas se puede elegir 
            entre las diferentes calidades que posee el video, aunque dependiendo del formato
            y calidad, la descarga puede demorar algunos minutos.
            <br/><br/>
            La página está diseñada con el motor de plantillas Handlebars el cual 
            se renderiza desde un servidor de node creado con el framework express, este 
            recibe las rutas para procesar los videos que se descargan desde Youtube y 
            posteriormente se convierten usando la herramienta de FFmpeg, está montado 
            sobre un contenedor de Docker y desplegado en la plataforma de Heroku, al 
            inicio la idea principal era construir un sitio en el cual además de descargar 
            los vídeos y audios, se pudiera convertir videos, audios, imágenes fuera de 
            Youtube, pero a falta de tiempo solo se realizaron un par de herramientas, 
            en el futuro se irán añadiendo nuevas.
          </p>

          <img src='https://res.cloudinary.com/dfxizywkv/image/upload/v1653323275/img/original_cmqwiu.png'/>
          <br/><br/>
          <h4>Características e implementaciones:</h4><br/>
          <p>
            Se puede ingresar la url del video de Youtube deseado, seleccionar su formato 
            y en la herramienta de video su calidad, para posteriormente descargarlo, 
            la pagina está implementada por las siguientes tecnologías:
            <br/>
          </p>
          <ul>
              <li>NodeJs: Para la ejecución de todo el código.</li>
              <li>Express: Para la creación del servidor, manejo de rutas y la lógica de la página.</li>
              <li>Handlebars: Motor de plantillas utilizado para la creación de las plantillas HTML.</li>
              <li>Ytdl-core: Herramienta para la gestión de los videos de Youtube.</li>
              <li>FFmpeg: Librería para la conversión y unión de archivos multimedia.</li>
              <li>Docker: Para la creación del contenedor sobre el cual se ejecuta la aplicación.</li>
              <li>Git: Para el manejo de versiones.</li>
              <li>Heroku: Plataforma en la cual se desplegó el contenedor con la aplicación. </li>
          </ul>
          <img src='https://res.cloudinary.com/dfxizywkv/image/upload/v1653323275/img/futuro_nizfhm.png'/>
          <p style={{textAlign: 'center'}}><cite>(Resultado futuro), <a href='https://dlmp3-proyect.herokuapp.com/home' target='_blank'><strong>Resultado actual</strong></a> (puede demorar unos segundos al inicio).</cite></p>
        </div>
      </div>
    </div>
  )
}
