import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

export default class BaseLayout extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        )
    }
}