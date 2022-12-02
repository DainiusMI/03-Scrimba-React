import React from "react";
import logo from "../../assets/Troll face.png"

export default function Header() {
    return (
        <header className="lesson-header">
            <div className="logo-container">
                <img className="header-logo" src={logo} alt="" />
                <h3 className="heading-logo">MemeGenerator</h3>
            </div>
            <p className="header-text">React Course - project 3</p>
        </header>
    )
}