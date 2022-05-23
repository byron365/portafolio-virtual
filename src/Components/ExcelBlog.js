import React  from 'react'
//import { BtnSlide } from './BtnSlide'
import { CategoryItem } from './CategoryItem'
import comands from '../Transcriptions/comands-sp.json'
import funciones from '../Transcriptions/funciones-sp.json'
import { TableFun } from './TableFun'

const imgToSHow = "https://res.cloudinary.com/dfxizywkv/image/upload/v1652993783/Gifs/Tabla-dinamica_tpzwon.gif";
                    

export const ExcelBlog = () => {

    const categories = ["Inicio", "Insertar","Diseño Página", "Fórmulas", "Datos", "Revisar"];

  return (
    <div className='container' id='Inicio'>
        <div className='card mt-3'>
            <h2 className='txt-center'>Excel</h2>

            <p className='description-grey'>
                Excel es una herramienta muy potente para el análisis y gestión de datos, fácilmente se pueden crear
                tablas organizadas en las que se pueden realizar cálculos, búsquedas, gráficos de todo tipo para 
                representar de la mejor forma los resultados, análisis de tendencia, tablas dinámicas útiles para 
                resumir de manera simple series de datos complejos o extensos, se pueden tener interconectadas 
                diferentes tablas con el fin de organizar los datos, esto es muy útil para la gestión de ventas, 
                de productos, precios, organizar pedidos, vendedores, y establecer filtros para localizar únicamente
                la información de interés. 
                <br/> 
                Es una herramienta la cual vale la pena aprender, por esa razón trataré de colocar mis experiencias y apuntes a medida aumenta mi conocimiento y experiencia. 
            </p>
            <img src={imgToSHow} className='card-img exel-img' alt='Excel'/>
        </div>

        <div className='card mt-3 card-complete' id='Herramientas'>
            <h2 className='txt-center'>Herramientas</h2>

            <p className='description-grey'>
                Alguna de las herramientas que se pueden encontrar en el programa con un pequeño ejemplo visual, 
                descripción y comando, tener en cuenta que algunas herramientas no poseen un comando establecido 
                y aún se está trabajando en más ejemplos visuales.
            </p>
            

            {
                categories.map((category, i)=>{
                    return(
                        <React.Fragment key={i}>
                            <CategoryItem key={category} title={category} info={comands}/>
                            <hr key={i + category}/>
                        </React.Fragment>
                    )
                })
            }

            
        </div>

        <div className='card mt-3 mb-3 card-complete' id='Funciones'>
            <h2 className='txt-center'>Funciones</h2>

            <p className='description-grey'>
            Las funciones son herramientas muy útiles para agilizar el cálculo y análisis de nuestros datos, 
            nos ayudan a realizar cálculos numéricos, a trabajar con fechas, a realizar búsquedas dentro y 
            fuera de nuestro libro, condiciones y muchas cosas más. <br/>En este apartado dejo algunas funciones básicas,
             con una pequeña descripción y sus argumentos, en el futuro se irán agregando más.
            </p>

              {
                  funciones.map((fun, i) => {
                    return (
                        <React.Fragment key={i}>
                            <TableFun key={fun.Categoria} fun={fun}/>
                            <hr key={i + fun.Categoria} />
                        </React.Fragment>
                    )
                  })
              }
        </div>
    </div>
  )
}
