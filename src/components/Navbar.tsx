import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <strong>The</strong>World<strong>Clocks</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {/* Menu Timezone */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="timezoneDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Timezone
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="timezoneDropdown">
                                <li><Link to="/timezone/utc" className="dropdown-item">UTC</Link></li>
                                <li><Link to="/timezone/gmt" className="dropdown-item">GMT</Link></li>
                                <li><Link to="/timezone/cet" className="dropdown-item">CET</Link></li>
                                <li><Link to="/timezone/pacific" className="dropdown-item">Pacific Time</Link></li>
                                <li><Link to="/timezone/mountain" className="dropdown-item">Mountain Time</Link></li>
                                <li><Link to="/timezone/central" className="dropdown-item">Central Time</Link></li>
                                <li><Link to="/timezone/eastern" className="dropdown-item">Eastern Time</Link></li>
                                <li><Link to="/timezone/china" className="dropdown-item">China Standard Time</Link></li>
                                <li><Link to="/timezone/india" className="dropdown-item">India Standard Time</Link></li>
                                <li><Link to="/timezone/brazil" className="dropdown-item">Brazil Standard Time</Link></li>
                            </ul>
                        </li>

                        {/* Menu Tools */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="toolsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Tools
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="toolsDropdown">
                                <li><Link to="/timer" className="dropdown-item">Timer</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {/* Search Field */}
                    <form className="d-flex">
                        <input
                            className="form-control me-1 bg-dark text-white placeholder-light"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                        />
                        <button className="btn btn-outline-light" type="submit" style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}>
                            <i className="bi bi-search"></i> {/* Ícone de lupa */}
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;