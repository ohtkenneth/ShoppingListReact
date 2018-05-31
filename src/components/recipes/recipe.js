import React from 'react';

export default function Recipe({name, description, imagePath}) {
    return (
        <li>
            { name }
            { description }
            { imagePath }
            <img
                src="{{ imagePath }}"
                className="img-responsive"
            />
        </li>
    )
}
