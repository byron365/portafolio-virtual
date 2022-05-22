import React from 'react'
import { Table } from './Table'

export const CategoryItem = ({title, info = {}}) => {
  return (
      <div className='category-item transition' key={title}>
          <h3 key={title + "h3"} data-bs-toggle="collapse" className='transition' href={"#collapse"+title.replaceAll(' ', '').replaceAll('.','').replaceAll('ñ',"n")} role="button" aria-expanded="false" aria-controls={"collapse"+title.replaceAll(' ', '').replaceAll('.','').replaceAll('ñ',"n")} >
              {title}
          </h3>

          <div key={title + "div"} className="collapse" id={"collapse"+title.replaceAll(' ', '').replaceAll('.','').replaceAll('ñ',"n")}>
              <Table  key={title + "table"} info={info} title={title}/>
          </div>
      </div>
  )
}
