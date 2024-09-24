import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider,Route,createRoutesFromElements} from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About'
import Country from './Pages/Country'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import CountryDetails from "./Country Components/CountryDetails"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<Error/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='country' element={<Country/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='country/:id' element={<CountryDetails/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
