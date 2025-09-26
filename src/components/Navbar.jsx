import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section>
                <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xNavLink:href="#bootstrap"></use></svg>
                    <span className="fs-4">Simple header</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/clothes" className="nav-link">Clothes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to="/shoes" className="nav-link" >Shoes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to="/furniture" className="nav-link" >Furniture</NavLink>
                        </li>
                    </ul>
                </header>
                </div>
            </section>   
        </>
    );
};

export default Navbar;