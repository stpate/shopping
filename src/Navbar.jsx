import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
        <>
          <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid" style={{backgroundColor: "peachpuff"}}>
            <a className="navbar-brand" href="#">
                <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/shlok-tintodesigns-transparent.png" height="100" width="200"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#aisha">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="aisha">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
</li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new">New</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/woman">Woman</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/men">Men</NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/form">Forms</NavLink>
                    </li>   
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </>
    );
}
export default Navbar;