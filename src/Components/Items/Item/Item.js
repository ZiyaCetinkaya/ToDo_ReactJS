import React from 'react'

import './Item.css'

const item = (props) => {
    return (
        <div className="item">
            <span>{props.text}</span>
            <button onClick={props.clicked}><span role="img" aria-labelledby="cros">❌</span></button>
        </div>
    );
}

export default item;