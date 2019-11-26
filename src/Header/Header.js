import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Header.css'
import SideList from './SideList';
import Logo from '.././images/logo.jpg'
class Header extends Component {
    render() {
        return (
            <div className="header">
            <div >
                <SideList logout={() => this.props.logout()}/>
                <span className="projectName">FRWA</span>
                <span className="projectSubName">Face Recognition Web App</span>
            </div>
            <div className="buttonDiv">
                {/* <Link to={"/register"}><Button>{this.props.buttonText}</Button></Link> */}
                
                <img src={Logo} style={{width:120, marginRight:10}}/>
            </div>
            </div>
        )
    }
}
export default Header;