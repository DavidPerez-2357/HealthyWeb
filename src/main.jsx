import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './styles/main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./components/Error.jsx";
import Recipe from "./pages/Recipe.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/recipe/:id' element={<Recipe/>}/>
              <Route path='/' element={<App/>}/>
              <Route path='*' element={<Error title='Page not found' message='The page you are looking for does not exist.'/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
