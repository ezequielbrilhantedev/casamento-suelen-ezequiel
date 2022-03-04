import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Home from './components/Template'
import Vestimenta from './components/Vestimenta'
import AppRoutes from './core/app-routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={AppRoutes.Vestimenta} element={<Vestimenta />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
