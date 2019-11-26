import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';


import { Link } from 'react-router-dom';
import Sidebar from "react-sidebar";
import './SideList.css';
import Logo from '.././images/logo.jpg'

class SideList extends React.Component {
    state = {
        sidebarOpen: false
      };
    
   
    onSetSidebarOpen = (open) => {
      this.setState({ sidebarOpen: open });
    }

    render(){
        return(
            <div className="sidemenu">
                <Sidebar
                    sidebar={
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <img src={Logo}/>
                            <br/>
                        <Link to={"/register"}><button className="sidemenu_button" >Register</button></Link>
                        <Link to={"/recognition"}><button className="sidemenu_button">Mark Presence</button></Link>
                        <Link to={"/admin"}><button className="sidemenu_button">Reports</button></Link>
                        
                        <button className="sidemenu_button" onClick={() => this.props.logout()}>Logout</button>
                        </div>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white" } }}
                >
                    <button onClick={() => this.onSetSidebarOpen(true)} className="sidemenu_icon">
                    <MenuIcon style={{color:'white'}}/>
                    </button>
                </Sidebar>
            </div>
        )
    }
}
export default SideList