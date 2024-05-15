import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
/* import Home from './pages/home/Home'; */
/* import Gallery from './pages/bentoGallery/BentoGallery' */
/* import Telde from './pages/telde/Telde'; */
/* import Crud from './pages/crud/Crud'; */

function App() {
  const Home = lazy(() => import('./pages/home/Home'));
  const Gallery = lazy(() => import('./pages/bentoGallery/BentoGallery'));
  const Telde = lazy(() => import('./pages/telde/Telde'));
  const Crud = lazy(() => import('./pages/crud/Crud'));
  const CookiesWeb = lazy(() => import('./pages/cookiesWeb/CookiesWeb'));

  return (
    <Suspense fallback={""}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/historia' element={<Telde />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/opinions' element={<Crud />} />
          <Route path='/cookies' element={<CookiesWeb />} />
        </Routes>
      </BrowserRouter>
    </Suspense>

  )
}

export default App
