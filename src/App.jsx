import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter>
          <NavBar />
            <main className="max-w-5xl mx-auto px-4 pt-24">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
          
            </main>  
      </HashRouter>    
    </>
  )
}

export default App
