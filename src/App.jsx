import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Gallery from './pages/bentoGallery/BentoGallery'
import Telde from './pages/telde/Telde';
import Prac from './pages/practice/Prac';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/historia' element={<Telde />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/' element={<Home />} />
        <Route path='/prac' element={<Prac />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
