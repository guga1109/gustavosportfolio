import React from "react";
import { Outlet, Navlink, NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="sidebar">
                <NavLink to="/"><span class="material-icons">home</span></NavLink>
                <NavLink to="/contact"><span class="material-icons">email</span></NavLink>
                <NavLink to="/books"><span class="material-icons">auto_stories</span></NavLink>
            </div>
            <div className="main-content">
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;