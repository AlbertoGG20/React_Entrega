import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Gallery from './pages/bentoGallery/BentoGallery'
function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
