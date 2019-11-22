import React from 'react';
import { Button, TextField } from '@material-ui/core';

function EnterName(props) {
  const greeting = 'Hello Function Component!';
  return  (
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <span style={{fontSize:40, fontWeight:'20px'}}>Hi, Enter your name..</span>
        <TextField 
            id="inputname" 
            style={{width:600, marginBottom:30, marginTop:20}} 
            inputProps={{style: { textAlign: "center", fontSize:30 }}}
            underlineFocusStyle={{style: {borderWidth:20, borderColor:"white"}}}
            />
        <Button 
            variant="contained" 
            style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:200}}
            onClick={()=>props.getName(document.getElementById('inputname').value)}>Next</Button>
      </div>
  )
}
export default EnterName;