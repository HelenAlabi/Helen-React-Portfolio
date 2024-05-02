import NavBar from "./sections/NavBar/NavBar"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Projects from "./sections/projects/Projects"
import Services from "./sections/services/Services"


const App = () => {
  return (
    <main>
        <NavBar/>
        <Header/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
        
    </main>
  )
}

export default App
