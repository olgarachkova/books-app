import React from 'react';

import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { ContentBox } from 'components/ContentBox'

export function StartPage({ history }) {
    return (
        <>
            <Header history={history} />
            <ContentBox>
                <p>Поиск книг</p>
            </ContentBox>
            <Footer />
        </>
    )
}