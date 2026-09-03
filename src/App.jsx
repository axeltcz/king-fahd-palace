import { Routes, Route } from 'react-router-dom'
import Navbar from './components/kfp/Navbar.jsx'
import Footer from './components/kfp/Footer.jsx'
import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import Restaurant from './pages/Restaurant.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chambres" element={<Rooms />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
