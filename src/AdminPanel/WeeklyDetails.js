import React, { Component } from 'react';

import StatCard from '../components/StatCard';
class WeeklyDetails extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', width:'100vw'}}>
                <div lg={3} style={{backgroundColor:'green'}}>
                <StatCard
                    bigIcon={<i className="pe-7s-server text-warning" />}
                    statsText="Capacity"
                    statsValue="105G"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                />
                </div>
                <StatCard
                    bigIcon={<i className="pe-7s-server text-warning" />}
                    statsText="Capacity"
                    statsValue="105G"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                />
            </div>
        )
    }
}
export default WeeklyDetails