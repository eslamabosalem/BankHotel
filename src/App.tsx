import About from "./components/About"
import Apartment from "./components/Apartment"
import Facilities from "./components/Facilities"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Rooms from "./components/Rooms"
import Gallery from "./components/Gallery"
import GetInTouch from "./components/GetInTouch"
import Footer from "./components/Footer"


function App() {

  return (
    <div className=" bg-primary overflow-y-hidden">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Apartment />
      <Gallery />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
