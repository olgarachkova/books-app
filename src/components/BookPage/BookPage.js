import './BookPage.scss'

import React from "react";

import { BigBookCard } from "components/BigBookCard";


export function BookPage({ bookInfo }) {
    return (
        <div className='content'>
            <div className='container'>
                <BigBookCard {...bookInfo} />
            </div>
        </div>
    )
}