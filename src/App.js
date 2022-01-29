import './App.css'
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import { Container } from 'reactstrap'


function App() {



  return (
    <>
    <Container fluid style={{margin: 0, padding:0}}>
      {/* <Intro /> */}
      <Work />
      <About />
      <Contact />
    </Container>
    </>
  )
}

export default App
