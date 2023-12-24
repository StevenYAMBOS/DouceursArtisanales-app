import './styles/App.css'
// import Footer from './components/Footer'
// import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
// import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</BrowserRouter>
    </>
  )
}

export default App
