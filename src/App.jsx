import './App.css'
import Banner from './Banner'
import Experience from './Experience'
import Footer from './Footer'
import Motions from './Motions'
import Navbar from './Navbar'
import Question from './Question'
import Version from './Version'
import Vision from './Vision'
import './index.css'; 
function App() {
  return (
    <>
      {/* navbar component added here */}
    <Navbar></Navbar> 

    {/* banner section */}
    <Banner></Banner>
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
    <Footer></Footer>
    </>
  )
}

export default App
