import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';

export default class navLink extends Component {
    render() {
        return (
            <div className = 'headerlink'>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <Link to ={'/'}>
                            <li className="nav-item nav-link   text-white">  Home </li>
                        </Link>
                        <Link to ={'/about'}> 
                            <li className="nav-item nav-link text-white"> About Us </li>
                        </Link>
                        <Link to ={'/contact'}>
                            <li className="nav-item nav-link text-white"> Contact  </li>
                        </Link>
                        <Link to ={'/signout'}>
                            <li className="nav-item nav-link text-white">  SignOut </li>
                        </Link>
                    </ul>
                </nav>

            </div>
        )
    }
}
