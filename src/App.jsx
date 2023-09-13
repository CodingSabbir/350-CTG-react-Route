import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componets/Navbar"
import Home from "./componets/Home"
import Contact from "./componets/Contact"
import Footer from "./componets/Footer"
import About from "./componets/About"
import NotFound from "./componets/NotFound"

function App() {


  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
   <Footer/>
    </>
  )
}

export default App
