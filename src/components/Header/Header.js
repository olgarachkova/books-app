import './header.scss'

import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function Header({ history }) {
    const [searchQuery, setSearchQuery] = useState("");

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
                        <Link to="/" className="header-menu-item">Главная</Link>|
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