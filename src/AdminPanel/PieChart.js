import React from 'react'

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart extends React.Component {
    render(){
        const options = {
            exportEnabled: false,
            animationEnabled: true,
            title: {
              text: this.props.chartType + " for " + this.props.date.getDate() + "/" + (this.props.date.getMonth()+1) + "/" + this.props.date.getFullYear() + " to " + this.props.endDate.getDate() + "/" + (this.props.endDate.getMonth()+1) + "/" + this.props.endDate.getFullYear()
            },
            data: [{
              type: "pie",
              startAngle: 75,
              toolTipContent: "<b>{label}</b>: {y}%",
              showInLegend: "true",
              legendText: "{label}",
              indexLabelFontSize: 16,
              indexLabel: "{label} - {y}%",
              dataPoints: this.props.chartData
            }]
          }

        return(
            <div style={{width:700, height:200, margin: 'auto'}}>
                <CanvasJSChart options = {options} />
            </div>
        )
    }
}
export default PieChart;