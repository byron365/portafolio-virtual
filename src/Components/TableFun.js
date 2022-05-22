import React from 'react'

export const TableFun = ({fun}) => {
    return (
        <div className='category-item transition' key={fun.Categoria}>
            <h3 key={fun.Categoria + "h3"} data-bs-toggle="collapse" className='transition' href={"#collapse" + fun.Categoria.replaceAll(' ', '').replaceAll('.', '').replaceAll('ñ', "n")} role="button" aria-expanded="false" aria-controls={"collapse" + fun.Categoria.replaceAll(' ', '').replaceAll('.', '').replaceAll('ñ', "n")} >
                {fun.Categoria}
            </h3>

            <div key={fun.Categoria + "div"} className="collapse" id={"collapse" + fun.Categoria.replaceAll(' ', '').replaceAll('.', '').replaceAll('ñ', "n")}>
                <table className="table" key={Date.now() + fun.Categoria + "Table"}>
                    <thead key={Date.now() + fun.Categoria + "TableHead"}>
                        <tr key={Date.now() + fun.Categoria + "TableTr"}>
                            <th key={Date.now() + fun.Categoria + "TableCategoria"} scope="col">Función</th>
                            <th key={Date.now() + fun.Categoria + "TableComando"} scope="col">Descripción</th>
                            <th key={Date.now() + fun.Categoria + "TableDescripcion"} scope="col">Argumentos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fun.Funciones.map(f => {
                                return (
                                    <tr key={Date.now()+f.Titulo}>
                                        <td><strong>{f.Titulo}</strong></td>
                                        <td className='tbodyFunc'>{f.Descripcion}</td>
                                        {/* <td>{JSON.stringify(f.Argumentos)}</td> */}
                                        <td className='tbodyFunc'>
                                            <ul>
                                                {
                                                    typeof (f.Argumentos) === 'object' ? f.Argumentos.map(args => {
                                                        return (<li key={args.Titulo +Date.now()}><strong>{args.Titulo}:</strong> {args.Descripcion}</li>)
                                                    }) : f.Argumentos
                                                }
                                            </ul>
                                        </td>


                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
