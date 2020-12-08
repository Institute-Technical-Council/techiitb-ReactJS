import React from 'react';
import '../style/navbar.css';

function NavBar(props) {
    var present_item = props.present;
    var nav_items = props.nav_items;
    var logo_src = props.logo_src;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo_src} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="center-navitems">
                        <ul className="navbar-nav">
                            {nav_items.map(function (nav_item, i) {
                                if (nav_item == present_item) {
                                    return (
                                        <li className="nav-item active1">
                                            <a className="nav-link" href="#">{nav_item}</a>
                                        </li>
                                    );
                                }
                                else {
                                    return (
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">{nav_item}</a>
                                        </li>
                                    );
                                }
                            })}
                            {/*
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;