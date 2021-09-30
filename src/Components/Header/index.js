import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link to='/'>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                        </Link>
                        <Link to='/cart'>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
    );
};

export default Header;