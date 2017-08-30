import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (

            <div className="jumbotron text-center mt-4">
                <div className="col-sm-8 mx-auto">
                    <h1>Still awesome</h1>
                    <p><Link to="/About">Read more about it.</Link></p>
                </div>
            </div>

        )
    }
}