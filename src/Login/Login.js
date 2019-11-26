import React from 'react'
import image from '.././images/logo.jpg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
    state={
        showerror: false
    }
    setLogin = () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        console.log(username + " " + password)
        const formData = new FormData()
        formData.append('admin_name', username)
        formData.append('admin_password', password)
        fetch('http://127.0.0.1:5000/api/login', {   
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data['success'])
            if(data['success'])
                this.props.setLogin()
            else
                this.setState({showerror: true})
        })
        //this.props.setLogin()
    }

    render() {
        return(
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div style={{width:450, height:'100vh', backgroundColor:'blue', justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={image}/>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'auto'}}>
                Face Recognition Web Application
                <TextField
                    required
                    id="username"
                    label="Username"
                    margin="normal"
                    ref="username"
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    ref="password"
                />

                <Button variant="contained" 
                    style={{backgroundColor:'blue'}}
                    onClick={() => this.setLogin()}>
                    Login
                </Button>
                {this.state.showerror ? "Invalid username/password": ''}
                </div>
            </div>
        )
    }
}
export default Login