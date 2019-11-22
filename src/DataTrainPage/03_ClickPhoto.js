import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import Webcam from 'react-webcam';


class ClickPhoto extends Component {
//function ClickPhoto(props) {
     setRef = webcam => {
        this.webcam = webcam;
    }
     capture = () => {
        const image = this.webcam.getScreenshot();
        console.log(image)
        this.props.getImage(image)
    }
    render(){
        return  (
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginBottom:20}}>
                <span style={{fontSize:40, fontWeight:'20px'}}>Great {this.props.name}, Lets get a photo clicked..</span>
                <Webcam
                    audio={false}
                    width={720}
                    height={400}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"/>
                
                <Button 
                    variant="contained" 
                    style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:200, marginTop:20}}
                    onClick={()=>this.capture()}>Done</Button>
   
            </div>
        )
    }
}
export default ClickPhoto;