import './header.scss'

import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import { Button } from 'components/Button';

export function Header() {
    let history = useHistory();
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
                        <Button type="submit">Поиск</Button>
                    </form>
                </div>
            </div>
        </header>
    )
}