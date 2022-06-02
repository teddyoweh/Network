import React from "react";
import "./assets/css/navbar.css";
export default function Navbar(){
    return (
        <>
        <nav className="navbar container-fluid navbar-expand-lg navbar-light p-3 fixed-top" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex" role="search">
                
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
</>
    )
}