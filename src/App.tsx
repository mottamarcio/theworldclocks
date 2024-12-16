import { useState } from "react";
import Clockcard from "./components/Clockcard"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import WorldClockTable from "./components/WorldClockTable"

function App() {
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  const toggleTimeFormat = () => {
    setIs24HourFormat(prev => !prev);
};

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Clockcard is24HourFormat={is24HourFormat} toggleTimeFormat={toggleTimeFormat} />
        <WorldClockTable is24HourFormat={is24HourFormat} />
      </div>
      <Footer />
    </>
  )
}

export default App
