import React from "react";
import "./assets/css/footer.css";
export default function Footer(){
    return (
        <>
        <nav className="navbar bg-light" id='footer'>
            <div className="container-fluid">
                 <ul  className='footericons'>
                     <li>
                         <a><i className='bx bxs-map-pin'></i></a>
                     </li>
                     <li>
                         <a><i className='bx bx-globe'></i></a>
                     </li>
                     <li>
                         <a><i className='bx bxs-store'></i></a>
                     </li>
                     <li>
                         <a><i className='bx bxs-notification'></i></a>
                     </li>
                     <li>
                         <a><i className='bx bxs-dashboard'></i></a>
                     </li>
                 </ul>
            </div>
            </nav>
</>
    )
}