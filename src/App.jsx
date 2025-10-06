
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Advantages from './pages/Advantages'
import Working from './pages/Working'
import Future from './pages/Future'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/history' element={<History/>}/>
      <Route path='/advantages' element={<Advantages/>}/>
      <Route path='/working' element={<Working/>}/>
      <Route path='future' element={<Future/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
