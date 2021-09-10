import './StartPage.scss';

import React from 'react';

import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { Select } from 'components/Select'

export function StartPage() {
    return (
        <>
            <Header />
            <main className='content'>
                <div className='container'>
                    <p>Поиск книг</p>
                    <Select values={['fsdfsdf', 'sfdsdfds', 'dadsadasdsa']} defaultValue={'dadsadasdsa'} />
                </div>
            </main>
            <Footer />
        </>
    )
}