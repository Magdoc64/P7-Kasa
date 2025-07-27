import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home/Home.jsx'
import Logement from './pages/Logement/Logement.jsx'
import ErrorPage from './pages/Error/Error.jsx'
import APropos from './pages/APropos/APropos.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className='global container'>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:idCard" element={<Logement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
      <Footer/>
    </Router>
  </StrictMode>,
)

