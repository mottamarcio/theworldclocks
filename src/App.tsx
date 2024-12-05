import Clockcard from "./components/Clockcard"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Clockcard />
      </div>
      <Footer />
    </>
  )
}

export default App
