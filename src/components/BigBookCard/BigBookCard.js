import './BigBookCard.scss'

import React from "react";

export function BigBookCard(props) {
    return (
        <article className="about-book">
            <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title}
                className="about-book-img" />
            <div className="about-book-bigdescrition">
                <span className="book-title">{props.volumeInfo.title}</span>
                <span className="book-minititle">Авторы: {props.volumeInfo.authors.join(', ')}</span>
                <p className="about-book-description">Категории: {props.volumeInfo.categories.join(', ')}</p>
                <p className="about-book-description">Категории: {props.volumeInfo.description}</p>
            </div>
        </article>
    )
}