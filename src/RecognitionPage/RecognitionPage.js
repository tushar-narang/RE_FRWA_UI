import React, { Component } from 'react';
import Header from '.././Header/Header'
import "./RecognitionPage.css"
import Webcam from 'react-webcam';
import WelcomeModal from '.././WelcomeModal/WelcomeModal';
import background from '../images/background3.jpg'
import { Button } from '@material-ui/core';

import StatCard from '../components/StatCard'

class RecognitionPage extends Component {
    state={
        welcome: false,
        name: '',
        slot: ''
    };

    backToRecognitionPage = () => {
        this.setState({
            welcome: false,
            name: '',
            slot: ''
        })
    }

    setRef = webcam => {
        this.webcam = webcam;
    }
    capture = () => {
        console.log('hi')
        const image = this.webcam.getScreenshot();
        console.log(image)
        //this.refs.modal.show() 
        this.setState({
            welcome: true
        })

        fetch(image)
            .then(res => res.blob())
            .then(blob => {
                console.log('here')
               
                const formData = new FormData()
                formData.append('file', blob)

                fetch('http://127.0.0.1:5000/api/recognize', {
               
                method: 'POST',
                
                body: formData
                })
                .then(response => {
                    if(response.ok){
                        return response.json()
                    }else{
                        return "Not recognised"
                    }
                })
                .then((data) => {
                    if(data == "Not recognised"){
                        this.setState({
                            name: "Not recognised"
                        })
                    }else{
                        this.setState({
                            name: data['name'],
                            slot: data['slot']
                        })
                    }
                })
                


            })




    }
    render() {
        console.log(this.state)
          
      return (
          <div className="recognitionPage" style={{backgroundImage: "url("+background+")",backgroundSize: 'cover', overflow: 'hidden'}}>
              <Header logout={()=> this.props.logout()}/>


              <div className="mainDiv"  >

                {this.state.name != ''?
                  
                  <WelcomeModal name={this.state.name} slot={this.state.slot} backToRecognitionPage={() => this.backToRecognitionPage()}/>
                  :
                <div className="webcamDiv">
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    width={720}
                    height={400}
                    screenshotFormat="image/jpeg"/>
                <Button 
                    variant="contained" 
                    style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:200, marginTop:20}}
                    onClick={()=>this.capture()}>Capture</Button>
                </div>
              
                }
              </div>
          </div>
      )
    }
}
export default RecognitionPage
