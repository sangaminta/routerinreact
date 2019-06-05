import React from 'react';
import NavBar from './NavBar';
import Home from './Home';  
import Contact from './Contact';
import AboutUs from './AboutUs';
import SignOut from './SignOut';
import { Route } from 'react-router-dom';

export default class Root extends React.Component {
    render() {
        return (
            <div className ="container">
                <div className ="row">                  
                       <NavBar />              
                </div>
                <div className ="row">
                    <div className ="col-xs-10 col-xs-offset-1">
                        <Route exact path ='/' component={Home} />
                        <Route exact path ='/contact' component={Contact} />
                        <Route exact path ='/signout' component={SignOut} />
                        <Route exact path ='/about' component={AboutUs} /> 
                    </div>              
                </div>  
            </div> 
        )
    }
}
