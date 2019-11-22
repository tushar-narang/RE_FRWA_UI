import React from 'react';
import { Button, TextField } from '@material-ui/core';

function EnterName(props) {
  const greeting = 'Hello Function Component!';
  return  (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <span style={{fontSize:40, fontWeight:'20px'}}>Hey {props.name}, What's your emailid?</span>
        <TextField 
            id="inputemail" 
            style={{width:600, marginBottom:30, marginTop:20}} 
            inputProps={{style: { textAlign: "center", fontSize:30 }}}/>
        <Button 
          variant="contained" 
          style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:200}}
          onClick={()=>props.getEmail(document.getElementById('inputemail').value)}>Next</Button>
    </div>
  )
}
export default EnterName;