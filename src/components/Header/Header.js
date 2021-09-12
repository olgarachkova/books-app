import './header.scss'

import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import { Button } from 'components/Button';
import { Select } from 'components/Select';

export function Header() {
    let history = useHistory();
    const [searchQuery, setSearchQuery] = useState("");
    const [orderBy, setOrderBy] = useState("relevance");
    const [subject, setSubject] = useState("all");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleOrderBySelectChange = (event) => {
        setOrderBy(event.target.value);
    }

    const handleSubjectSelectChange = (event) => {
        setSubject(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search?search=${searchQuery}&orderBy=${orderBy}&subject=${subject}`);
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
                <div>
                    <Select values={['relevance', 'newest']} currentValue={orderBy} onChange={handleOrderBySelectChange} />
                    <Select values={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']} currentValue={subject} onChange={handleSubjectSelectChange} />
                </div>
            </div>
        </header>
    )
}