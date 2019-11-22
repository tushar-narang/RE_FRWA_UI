import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
class Register extends Component {
    state={
        data: ''
    }

    componentDidMount(){
        console.log(this.props.data.name)
        console.log(this.props.data.image)
        fetch(this.props.data.image)
        .then(res => res.blob())
        .then(blob => {
            
            const formData = new FormData()
            formData.append('name', this.props.data.name)
            formData.append('file', blob)

            fetch('http://127.0.0.1:5000/api/train', {
            
            method: 'POST',
            
            body: formData
            })
            .then(response => {
                    this.setState({
                        data: response.ok ? "Successfully Registered" : "Error with server"
                    })
                
            })
        })
    }
    
    render(){
        const {name, image} = this.props.data;
        console.log("uii",name)
        return  (
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginBottom:20}}>
                <span style={{fontSize:40, fontWeight:'20px'}}>
                    {this.state.data}
                </span>
                
                <div style={{display:'flex'}}>
                    <Link to={"/register"}>
                        <Button 
                            variant="contained" 
                            style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:300, marginRight:15}}
                            onClick={()=>this.props.gotoStage1()}>Add another user</Button>
                    </Link>
                    <Link to={"/recognition"}>
                        <Button 
                            variant="contained" 
                            style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:300, marginLeft:15}}
                            >Goto Attendance page</Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Register;