import React, { Component } from 'react';
import './WelcomeModal.css'
import { Button, LinearProgress } from '@material-ui/core';

class WelcomeModal extends Component {
  state={
    time: 0
  }

  time =0;

  componentDidMount = () => {
  
    this.interval = setInterval(() => {
       this.setState({ time:this.time })
       this.time += 2;
    }, 100);

    setTimeout(function() { 
      clearInterval(this.interval)
      this.props.backToRecognitionPage()
    }.bind(this), 5500)
  }

componentWillUnmount() {
  clearInterval(this.interval);
}
  render() {
    console.log(this.state.time)
    return (
        <div className="welcomeModalDiv">
          {
            this.props.name == "Not recognised" ?
              <p>Sorry didn't Recognise!! Try Again..</p>
              :
              this.props.slot == "not a valid time" ?
                <p>This is not a valid time slot</p>
                :
                <p>Hey! {this.props.name}, have a great {this.props.slot}.</p>

          }
          <LinearProgress variant="determinate" value={this.state.time} style={{width:300, marginLeft:15}} />
          <Button 
            variant="contained" 
            style={{backgroundColor:'black', color:'white', fontWeight:'bold', borderWidth:1, borderColor:'black', width:300, marginLeft:15}}
            onClick={() => this.props.backToRecognitionPage()}>Goto Attendance page</Button>
        </div>
      )
  }
}

export default WelcomeModal