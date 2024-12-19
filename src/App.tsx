import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clockcard from "./components/Clockcard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WorldClockTable from "./components/WorldClockTable";
import CityDetails from "./components/CityDetails";
import Timer from "./components/Timer";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BannerAd from "./components/BannerAd";

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
                                <BannerAd adClient="ca-pub-1574925051650355" adSlot="2343975816" adFormat="fluid" adLayoutKey="-fb+5w+4e-db+86" />
                                <WorldClockTable is24HourFormat={is24HourFormat} />
                            </>
                        }
                    />
                    <Route path="/:country/:city" element={<CityDetails is24HourFormat={is24HourFormat} toggleTimeFormat={toggleTimeFormat}/>} />
                    <Route path="/timer" element={<Timer />} />
                </Routes>
            </div>
            <BannerAd adClient="ca-pub-1574925051650355" adSlot="2343975816" adFormat="fluid" adLayoutKey="-fb+5w+4e-db+86" />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
