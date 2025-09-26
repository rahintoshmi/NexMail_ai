import './App.css'
import Banner from './Banner'
import Experience from './Experience'
import Home from './Home'
import Motions from './Motions'
import Navbar from './Navbar'
import Question from './Question'
import Version from './Version'
import Vision from './Vision'

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

    {/* vision */}
    <Vision></Vision>

    {/* version */}
    <Version></Version>
    {/* Question */}
    <Question></Question>
    {/* Motions */}
    <Motions></Motions>
    </>
  )
}

export default App
