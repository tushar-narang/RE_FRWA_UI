import React, { Component } from 'react';
import {BrowserRouter, Router, Route, Switch } from "react-router-dom";

import DailyDetails from './DailyDetails';
import Header from '../Header/Header'

import background from '../images/background3.jpg'
class AdminPage extends Component{

    logout = () => {
        this.props.logout()
    }
    render(){
        return(
            <div  style={{display:'flex', flexDirection:'column', backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
            
                <Header logout={()=> this.props.logout()}/>

                <div style={{display:'flex', flexDirection:'row'}}>  
                <DailyDetails/>
                </div>
                
            </div>
        )
    }
}
export default AdminPage;