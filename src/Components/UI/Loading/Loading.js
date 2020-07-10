import React from 'react';

import loadingGif from '../../../assets/images/load.gif';
import './Loading.css'

const loading = () => (
    <div className='loading'>
        <img src={loadingGif} alt="Loading" />
    </div>
);

export default loading;