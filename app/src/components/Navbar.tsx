import React from "react";
import "./assets/css/footer.css";
export default function Footer(){
    return (
        <>
        <nav className="navbar bg-light" id='footer'>
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