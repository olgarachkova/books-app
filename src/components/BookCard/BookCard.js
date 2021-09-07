import './BookCard.scss'

import React from "react";

export function BookCard(props) {
    return (
        <article className="about-book">
            <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title}
                className="about-book-img" />
            <div className="about-book-bigdescrition">
                <span className="book-title">{props.volumeInfo.title}</span>
                <span className="book-minititle">Авторы: {props.volumeInfo.authors ? props.volumeInfo.authors.join(', ') : ''}</span>
                <p className="about-book-description">Категории: {props.volumeInfo.categories ? props.volumeInfo.categories[0] : ''}</p>
            </div>
        </article>
    )
}