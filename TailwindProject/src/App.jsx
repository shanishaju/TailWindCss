import { Route, Routes } from 'react-router-dom'
import './App.css'

import Tailwindcssbasic from './pages/Tailwindcssbasic'
import TailWindCss from './pages/TailWindCss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Tailwindcssbasic/>} />
        <Route path="/t" element={<TailWindCss/>} />
      </Routes>
    </>
  )
}

export default App
