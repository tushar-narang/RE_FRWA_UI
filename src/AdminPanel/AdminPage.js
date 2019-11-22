import React, { Component } from 'react';
import SideMenu from './SideMenu';
import {BrowserRouter, Router, Route, Switch } from "react-router-dom";

import DailyDetails from './DailyDetails';
import WeeklyDetails from './WeeklyDetails';
import MonthlyDetails from './MonthlyDetails';

class AdminPage extends Component{

    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', height:'100vh'}}>
                <BrowserRouter>
                {/* <SideMenu/> */}
                
                <Switch>
                <Route exact path='/' component={DailyDetails} />
                    <Route path="/admin/daily" component={DailyDetails}/>
                    <Route path="/admin/weekly" component={WeeklyDetails}/>
                    <Route path="/admin/monthly" component={MonthlyDetails}/>
                </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}
export default AdminPage;