import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="px-4">
                            <Link to='/'><h4><dt>Home</dt></h4></Link>
                        </li>
                        <li className="px-4">
                            <Link to='/form'><h4><dt>Form</dt></h4></Link>
                        </li>
                        <li className="px-4">
                            <Link to='/table'><h4><dt>Table</dt></h4></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </section>
    )
}