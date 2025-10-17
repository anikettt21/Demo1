import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Repair from './pages/Repair'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = 'TechFix Hub'
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
