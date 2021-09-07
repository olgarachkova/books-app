import './header.scss'

import React, { useState } from "react";
//import { Link } from 'react-router-dom';

export function Header(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const { history } = props;

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = () => {
        history.push(`/search?search=${searchQuery}`);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <nav className="header-menu">
                        <a to="/" className="header-menu-item">Главная</a>|
                    </nav>
                    <form onSubmit={handleSubmit} >
                        <input type="text" name="search" placeholder="введите название книги" className="search"
                            onChange={handleInputChange} />
                        <button name="submit" className="search-button">Поиск</button>
                    </form>
                </div>
            </div>
        </header>
    )
}