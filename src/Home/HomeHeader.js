import React, { useState } from 'react';

const Homeheader = ({ name }) => {
    return (
        <div>
            <div>
                <h3>Hi {name}</h3>
                <p>Let's be productive</p>
            </div>
            <button>+</button>
        </div>
    );
}

export default Homeheader;
