import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { SectionOne } from './components/SectionOne/SectionOne'
import { SectionThree } from './components/SectionThree/SectionThree'
import { SectionTwo } from './components/SectionTwo/SectionTwo'

function App() {


  return (
    <>
      <Header/>
      <SectionOne/>
      <SectionTwo/> 
      <SectionThree/>
      <Footer/>
    </>
  )
}

export default App
