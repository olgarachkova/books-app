import './Select.scss'

import React from 'react';

export function Select({ values, currentValue, ...props }) {
    return (
        <select value={currentValue} className='select' {...props}>
            {values.map((value) =>
                <option value={value} key={`option-${value}`}>{value}</option>
            )}
        </select>
    )
}