import React from "react";

import { ContentBox } from 'components/ContentBox'
import { BigBookCard } from "components/BigBookCard";


export function BookPage({ bookInfo }) {
    return (
        <ContentBox>
            <BigBookCard {...bookInfo} />
        </ContentBox>
    )
}