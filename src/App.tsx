import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className='container'>
        <h1 className='my-4'>CRM Empleados</h1>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
