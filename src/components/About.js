import React, { Component } from 'react';
import notReactRouteImg from '../img/notReactRoute.jpg';
import reactRouteImg from '../img/reactRoute.png';

export default class About extends Component{
    render(){
        return(
            <div className="jumbotron text-center mt-4">
            <div className="col-sm-8 mx-auto">
                <h2>This is not a react route</h2>
                <img src={notReactRouteImg} alt=" " />

                <h2>An awesome react route</h2>
                <img src={reactRouteImg} alt=" " />
            </div>
        </div>
        )
    }
}