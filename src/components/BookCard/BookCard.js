import './BookCard.scss'

import React from "react";

export function BookCard({ imagelink, title, authors, categories, description, isExtended }) {
    const authorsCard = authors ? authors.join(', ') : '';
    let categoriesCard = '';
    if (!isExtended) {
        categoriesCard = categories ? categories[0] : '';
    } else {
        categoriesCard = categories ? categories.join(', ') : '';
    }

    return (
        <article className="about-book">
            {imagelink && <img src={imagelink} alt={title} className="about-book-img" />}
            <div className="about-book-big-description">
                <span className="book-title">{title}</span>
                <span className="book-minititle">Authors: {authorsCard}</span>
                <p className="book-minititle">Categories: {categoriesCard}</p>
                {isExtended && <p className="about-book-description">Description: {description && <span dangerouslySetInnerHTML={{ __html: `${description}` }}></span>}</p>}
            </div>
        </article >
    )
}