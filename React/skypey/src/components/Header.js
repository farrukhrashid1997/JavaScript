import "./Header.css";
import React from 'react'

export const Header = ({user}) => {
    const { name, status } = user;
    return (
        <div>
            <header className = "Header">
                <h1 className="Header__Name">{name}</h1>
                <p className = "Header__status">{status}</p>
            </header>
        </div>
    );
}

export default Header;