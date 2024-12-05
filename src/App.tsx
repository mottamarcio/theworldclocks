import Clockcard from "./components/Clockcard"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import WorldClockTable from "./components/WorldClockTable"

function App() {

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Clockcard />
        <WorldClockTable />
      </div>
      <Footer />
    </>
  )
}

export default App
