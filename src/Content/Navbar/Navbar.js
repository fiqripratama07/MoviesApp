import * as React from "react";
import './Navbar.css'
import Search from "../../Modules/Search/Search";

class Navbar extends React.Component {

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Movies App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Search/>
            </div>
        )
    }
};

export default Navbar;