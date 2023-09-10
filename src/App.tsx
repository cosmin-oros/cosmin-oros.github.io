import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-color bg-no-repeat bg-center">
          <Navbar/>
          <div className="relative z-0">
            <Hero/>
            <StarsCanvas/>
          </div>
          <div className="relative z-0">
            <About/>
            <StarsCanvas/>
          </div>
          <div className="relative z-0">
            <Experience/>
            <StarsCanvas/>
          </div>
          <Tech/>
          <div className="relative z-0">
            <Works/>
            <StarsCanvas/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
