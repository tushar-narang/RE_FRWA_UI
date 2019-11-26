import React from 'react'

import CanvasJSReact from './canvasjs.react';
import { fontSize } from '@material-ui/system';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart extends React.Component {
    state = {
      showchart: false
    };

    componentDidMount() {
      console.log('hee')
      this.setState({
        showchart: false
      }, () => {
        this.setState({
          showchart: true,
          chartData: [
              {y: (this.props.count/this.props.total*100).toFixed(1), label: 'Present', click:() => this.clicked('presentList')},
              {y:(100 - this.props.count/this.props.total*100).toFixed(1), label: 'Absent', click:() => this.clicked('absentList')}
          ]
        })
      })
    }
    componentWillReceiveProps() {
      console.log('hee')
      this.setState({
        showchart: false
      }, () => {
        this.setState({
          showchart: true,
          chartData: [
              {y: (this.props.count/this.props.total*100).toFixed(1), label: 'Present', click:() => this.clicked('presentList')},
              {y:(100 - this.props.count/this.props.total*100).toFixed(1), label: 'Absent', click:() => this.clicked('absentList')}
          ]
        })
      })
    }

    clicked = (listType) => {
      const startDate = this.props.date.getFullYear() + "-" + (this.props.date.getMonth()+1) + "-" + this.props.date.getDate();
      const endDate = this.props.endDate.getFullYear() + "-" + (this.props.endDate.getMonth()+1) + "-" + this.props.endDate.getDate();  
      fetch('http://127.0.0.1:5000/api/admin/' + listType + '/' + startDate + '/' + endDate + '/' + this.props.chartType)
      .then(response => response.blob())
      .then((blob) => {
 
        // 2. Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${this.props.chartType}_${startDate}_${endDate}.csv`);
        // 3. Append to html page
        document.body.appendChild(link);
        // 4. Force download
        link.click();
        // 5. Clean up and remove the link
        link.parentNode.removeChild(link);
        this.setState({
          loading: false
        });
      })
    }

    render(){
      console.log(this.state)
        const options = {
            exportEnabled: false,
            animationEnabled: true,
            title: {
              text: this.props.chartType + " for " + this.props.date.getDate() + "/" + (this.props.date.getMonth()+1) + "/" + this.props.date.getFullYear() + " to " + this.props.endDate.getDate() + "/" + (this.props.endDate.getMonth()+1) + "/" + this.props.endDate.getFullYear(),
              fontSize: 20,
              
            },
            data: [{
              type: "pie",
              startAngle: 75,
              toolTipContent: "<b>{label}</b>: {y}%",
              showInLegend: "true",
              legendText: "{label}",
              indexLabelFontSize: 16,
              indexLabel: "{label} - {y}%",
              // dataPoints: this.props.chartData,
              dataPoints: this.state.chartData,
              // click: this.clicked
            }]
          }

        return(
            <div style={{width:700, margin: 'auto', marginBottom:50}}>
                {this.state.showchart ? <CanvasJSChart options = {options} /> : '' }
            </div>
        )
    }
}
export default PieChart;