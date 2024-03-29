import React from "react";
import {Outlet, Navlink, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Main = () => {
    return (
        <div>
            <div className="sidebar">
                <NavLink to="/"><span className="material-icons">home</span></NavLink>
                <NavLink to="/contact"><span className="material-icons">email</span></NavLink>
                <NavLink to="/books"><span className="material-icons">auto_stories</span></NavLink>
                <NavLink to="/games"><span className="material-icons">videogame_asset</span></NavLink>
                <NavLink to="/quotes"><span className="material-icons">format_quote</span></NavLink>
            </div>
            <div className="main-content">
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;