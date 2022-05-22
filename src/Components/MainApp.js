import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { ExcelBlog } from './ExcelBlog';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Proyects } from './Proyects';

export const MainApp = () => {
  return (
    <React.Fragment>
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/excelnotes' element={<ExcelBlog/>}/>
                <Route path='/proyectos' element={<Proyects/>}/>
            </Routes>
       </BrowserRouter>
    </React.Fragment>
  )
}
