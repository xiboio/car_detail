import { BrowserRouter, Routes, Route } from "react-router-dom"

import NovoAtendimento from "./pages/NovoAtendimento"
import BuscarAtendimento from "./pages/BuscarAtendimento"

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<NovoAtendimento />} />

        <Route path="/buscar" element={<BuscarAtendimento />} />

      </Routes>

    </BrowserRouter>

  )
}