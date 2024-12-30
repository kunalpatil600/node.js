import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Allroutes from './Component/Allroutes';
import Navbar from './Component/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="">
      <Navbar/>
      <Allroutes/>
     </div>
    </>
  )
}

export default App
