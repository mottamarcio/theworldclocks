import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clockcard from "./components/Clockcard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WorldClockTable from "./components/WorldClockTable";
import CityDetails from "./components/CityDetails";
import Timer from "./components/Timer";

function App() {
    const [is24HourFormat, setIs24HourFormat] = useState(false);

    const toggleTimeFormat = () => {
        setIs24HourFormat(prev => !prev);
    };

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container my-5">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Clockcard is24HourFormat={is24HourFormat} toggleTimeFormat={toggleTimeFormat} />
                                <WorldClockTable is24HourFormat={is24HourFormat} />
                            </>
                        }
                    />
                    <Route path="/:country/:city" element={<CityDetails is24HourFormat={is24HourFormat} toggleTimeFormat={toggleTimeFormat}/>} />
                    <Route path="/timer" element={<Timer />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
