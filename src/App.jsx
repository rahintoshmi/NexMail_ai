import './App.css'
import Banner from './Banner'
import Experience from './Experience'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
    <>
      {/* navbar component added here */}
    <Navbar></Navbar> 

    {/* banner section */}
    <Banner></Banner>

    {/* home page */}
    <Home></Home>
    {/* experice */}
    <Experience></Experience>
    </>
  )
}

export default App
