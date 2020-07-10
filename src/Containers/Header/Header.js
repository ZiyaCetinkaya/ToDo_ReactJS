import React from 'react'

import calendar from '../../assets/images/calendar.png';
import './Header.css'

const header = () => {
    return (
        <div className="header">
            <img src={calendar} alt="To Do App"/>
            <h4>To Do App</h4>
        </div>
    );
}

export default header;