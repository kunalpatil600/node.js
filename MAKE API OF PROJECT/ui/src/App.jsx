import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../component/Navbars';
import AllRoutes from '../component/AllRoutes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="">
   <Navbars/>
   <AllRoutes/>
   </div>
    </>
  )
}

export default App
