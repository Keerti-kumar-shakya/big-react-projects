import Home from "./components/Home";
import Heros from "./components/Heros";
import Skills from "./components/Skills"
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {

  return (
    <main>
      <Home/>
      <Heros/>
      <Skills text = 'tech stack'/>
      <About/>
      <Projects text = 'web creations'/>
    </main>
  )
}

export default App

