import Clockcard from "./components/Clockcard"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Clockcard />
      </div>
      <Footer />
    </>
  )
}

export default App
