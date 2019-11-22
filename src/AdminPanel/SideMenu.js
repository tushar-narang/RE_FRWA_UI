import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './SideMenu.css';

class SideMenu extends Component{
    render(){
        return(
            <div className='sidemenu'>
                <h1>FRWA</h1>
                
                <br/>
                Reports
                <Link to={"/admin/daily"}><Button>Daily</Button></Link>
                <Link to={"/admin/weekly"}><Button>Weekly</Button></Link>
                <Link to={"/admin/monthly"}><Button>Monthly</Button></Link>

                <br/>
                Others
                <Link to={"/admin/monthly"}><Button>Settings</Button></Link>
            </div>
        )
    }
}
export default SideMenu