import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StyleGuide from './pages/StyleGuide'

function App() {
  return (
    <Router basename="/react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </Router>
  )
}

export default App
