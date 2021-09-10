import './select.scss'

import React, { useState } from 'react';

export function Select({ values, defaultValue }) {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
    }


    return (
        <select value={currentValue} onChange={handleChange} className='select'>
            {values.map((value, idx) =>
                <option value={value} key={idx}>{value}</option>
            )}
        </select>
    )
}