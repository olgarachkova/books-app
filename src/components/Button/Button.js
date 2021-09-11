import './Button.scss'

import React from 'react';

export function Button({ children, type = 'button', ...props }) {

    return (
        <button type={type} className="button" {...props}>{children}</button>
    )
}