
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pags/Cadastro/Cadastro';
import Login from './pags/Login/Login'
import Teste from './pags/Teste/Teste';



function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path='/teste' element={<Teste></Teste>}></Route>
    </Routes>
  </Router>
  )
}

export default App
