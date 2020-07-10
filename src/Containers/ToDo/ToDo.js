import React, { Component } from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

class ToDo extends Component {
    render() {
        return (
            <div className="ToDo">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default ToDo;