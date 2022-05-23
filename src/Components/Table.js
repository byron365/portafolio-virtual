import React, {useState} from 'react'
import { OffCanvas } from '../Components/OffCanvas'

export const Table = ({info = {}, title}) => {
    let customTitle = title.replaceAll(' ','').replaceAll('.','').toLowerCase();
    
    const [datos, setDatos] = useState({
        Herramienta:'Sin herramienta', 
        Comando:'', 
        Descripcion:"La herramienta no cuenta con una descripción",
        img:"https://res.cloudinary.com/dfxizywkv/image/upload/v1652995857/no-example_jr4rrz.svg"
    })
    const handleBtn = (newData = {})=>{
        setDatos(newData)
    }
  return (
    <React.Fragment>
          <table className="table" key={Date.now() + title + "Table"}>
              <thead key={Date.now() + title + "TableHead"}>
                  <tr key={Date.now() + title + "TableTr"}>
                      <th key={Date.now() + title + "TableCategoria"} scope="col">Categoria</th>
                      <th key={Date.now() + title + "TableHerramienta"} scope="col">Herramienta</th>
                      <th key={Date.now() + title + "TableComando"} scope="col">Comando</th>
                      <th key={Date.now() + title + "TableDescripcion"} scope="col">Descripción</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      info.map((info, i) => {
                          if (title === info.CategoryItem) {
                              return (
                                  <tr key={Date.now() + i + info.CategoryItem}>
                                    <td key={info.Categoría + Date.now() + i}>{info.Categoría}</td>
                                    <td key={info.Herramienta + Date.now() + i + 1}>
                                        <button key={info.Herramienta} className="btn btnTool" onClick={()=> handleBtn(info)} type="button" data-bs-toggle="offcanvas" data-bs-target={"#"+customTitle} aria-controls={customTitle}>
                                            {info.Herramienta}
                                        </button>
                                    </td>
                                      <td key={info.Comando + Date.now() + i}>{info.Comando}</td>
                                      <td key={info.Descripción + Date.now() + i}>{info.Descripción}</td>
                                  </tr>
                              )
                          }
                          return []
                      })
                  }
              </tbody>
          </table>
          <OffCanvas key={"canvasof"+title} title={customTitle} datos={datos}/>
    </React.Fragment>
  )
}
