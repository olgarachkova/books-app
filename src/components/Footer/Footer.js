import './Footer.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <menu className="footer-menu">
                    <li className="footer-menu-item"><a href="#" className="footer-menu-item-link">О нас</a></li>
                </menu>
            </div>
        </footer>
    )
}