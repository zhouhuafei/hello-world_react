import { Routes, Route } from 'react-router-dom'
import Home from 'src/pages/Home'
import Mine from 'src/pages/Mine'
import About from 'src/pages/About'

function RouterCollection () {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/mine" element={<Mine />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default RouterCollection