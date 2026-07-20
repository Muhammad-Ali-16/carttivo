import './App.css'
import Navbar from './compnents/layout/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className='h-[5000px]'>
      {/* <AllProdcuts/> */}
      <Navbar/>
   <Home/>   
    </div>
  )
}

export default App