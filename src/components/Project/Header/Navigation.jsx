import React from "react";
import "./styles.css";

const Navigation = ({setShow}) => {

    const onToggleMenu = () => {
        setShow("show");
    }

    return (
        <>
            <section id="navigation">
                <div className="nav-icon" onClick={onToggleMenu}>
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
                            strokeWidth="1"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </section>
        </>
    );
}
export default Navigation;
