import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "../pages/About/About";
import Portifolio from "../pages/Portifolio/Portifolio";
import Social from "../pages/Social/Social";
import Contact from "../pages/Contact/Contact"
import Index from "../pages/Index/Index";

function Switch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path='about' element={<About/>}/>
                <Route path ='contact' element={<Contact/>}/>
                <Route path='portifolio' element={<Portifolio/>}/>
                <Route path='social' element={<Social/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Switch;