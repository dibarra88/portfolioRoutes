import React, { Component } from 'react';
import reactLogo from '../logo.svg';

export default class Portfolio extends Component{
    render(){
        return(
            <div className="jumbotron text-center mt-4">
            <div className="col-sm-8 mx-auto">
                <img src={reactLogo} className="App-logo" alt=" "/>
            </div>
        </div>
        )
    }
}