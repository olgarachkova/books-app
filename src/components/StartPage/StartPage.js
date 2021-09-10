import './StartPage.scss';

import React from 'react';

import { Header } from 'components/header'
import { Footer } from 'components/footer'

export function StartPage() {
    return (
        <>
            <Header />
            <main className='content'>
                <div className='container'>
                    <p>Поиск книг</p>
                </div>
            </main>
            <Footer />
        </>
    )
}