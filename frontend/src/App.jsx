
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
function App() {
  

  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Header/> 
   <main className='min-h-screen max-w-screen-2xl mx-auto px-16 py-16 font-primary mt-20'>
   <Outlet />
   </main>
   <Footer />
   </AuthProvider>
    </>
  )
}

export default App
