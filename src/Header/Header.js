import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div className="header">
            <div >
                <span className="projectName">FRWA</span>
                <span className="projectSubName">Face Recognition Web App</span>
            </div>
            <div className="buttonDiv">
                <Link to={"/register"}><Button>{this.props.buttonText}</Button></Link>
                
      
            </div>
            </div>
        )
    }
}
export default Header;