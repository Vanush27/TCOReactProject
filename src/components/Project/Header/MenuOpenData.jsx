import React from 'react';
import {NavLink} from "react-router-dom";


const MenuOpenData = ({show, onToggleHidden}) => {

    return (
        show && <section id="nav-content" className={show}>
            <div className="close-btn" onClick={onToggleHidden}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="wrapper">
                <nav >

                    <ul className="nav_list_mobile">

                        <li data-text="Home">
                        <NavLink  onClick={onToggleHidden} to="/">Home</NavLink>
                        </li>

                        <li data-text="About">
                        <NavLink onClick={onToggleHidden} to="/about-me">About</NavLink>
                        </li>
                        <li data-text="Project">
                            <NavLink onClick={onToggleHidden} to="/project">Project</NavLink>
                        </li>
                        <li data-text="Form">
                            <NavLink  onClick={onToggleHidden} to="/form">Form</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default MenuOpenData;