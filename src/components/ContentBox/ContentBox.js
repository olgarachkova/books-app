import './ContentBox.scss';

import React from 'react';

export function ContentBox({ children }) {
    return (
        <main className='content'>
            <div className='container'>
                {children}
            </div>
        </main>
    )
}