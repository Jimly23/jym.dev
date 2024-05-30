import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Templates/Navbar'
import Hero from './Pages/Hero'
import Skills from './Pages/Projects'
import About from './Pages/About'
import Prices from './Pages/Prices'
import Footer from './Pages/Footer'
import DetailProjects from './components/Templates/DetailProjects'
import Products from './Pages/Products'
import FullProjects from './Pages/FullProjects'
import Projects from './Pages/Projects'
import DetailAbout from './Pages/DetailAbout'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='sm:px-5'>
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Skills />
              <About />
              <Prices />
              <Footer />
            </>
          }/>
          <Route path='about/' element={<DetailAbout />}/>
          <Route path='skills/' element={<Products />}/>
          <Route path='products/' element={<Products />}/>
          <Route path='projects/' element={<DetailProjects />}/>
          <Route path='projects/details/' element={<DetailProjects />}/>
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
