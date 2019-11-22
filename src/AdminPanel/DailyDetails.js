import React, { Component } from 'react';

import { Grid, Row, Col, Container } from "react-bootstrap";
import StatCard from '../components/StatCard';
import "../assets/css/light-bootstrap-dashboard-react.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PieChart from './PieChart';


class DailyDetails extends Component{
   state = {
       selectedDate: new Date(),
       endDate: new Date(),
       data: {},
       showchart: false
   }
    handleStartDateChange = date => {
    this.setState({
        selectedDate: date,
        showchart: false
    }, () => {
        this.getData();
    })
  };

  handleEndDateChange = date => {
    this.setState({
        endDate: date,
        showchart: false
    }, () => {
        this.getData();
    })
  };
  
  componentDidMount(){
    this.getData();
   
  }

  getData = () => {
    const startDate = this.state.selectedDate.getFullYear() + "-" + (this.state.selectedDate.getMonth()+1) + "-" + this.state.selectedDate.getDate();
    const endDate = this.state.endDate.getFullYear() + "-" + (this.state.endDate.getMonth()+1) + "-" + this.state.endDate.getDate();
    fetch('http://127.0.0.1:5000/api/admin/daily/' +  startDate + "/" + endDate)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
            data
        })
    })
  }

  showPieChart = (chartType, count)  => {
    this.setState({
        showchart: false,
    }, () => {
        this.setState({
            chartType: chartType,
            showchart: true,
            chartData: [
                {y: count/this.state.data['total']*100, label: 'Present'},
                {y:100 - count/this.state.data['total']*100, label: 'Absent'}
            ]
        })
    }   
  )
  }
    render(){
       
       console.log(this.state)
        return(
            <div style={{width:'100vw', paddingTop:20, backgroundColor:'#DCDCDC'}}>

                <div style={{ display:'flex', justifyContent:'flex-end', marginRight:40, marginBottom:10}}>
                    <span style={{marginTop:5}}> &nbsp; From  &nbsp;</span> 
                    <DatePicker
                    selected={this.state.selectedDate}
                    onChange={this.handleStartDateChange}
                    dateFormat="dd-MM-yyyy"/>
                    <span style={{marginTop:5}}> &nbsp; To &nbsp;</span> 
                    <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleEndDateChange}
                    dateFormat="dd-MM-yyyy" />
                </div>

                <Container>
                    <Row>
                        <Col lg={3} sm={6} 
                         onClick={() => this.showPieChart("Breakfast", this.state.data['count_breakfast'])}
                         style={{cursor:'pointer'}}>
                            <StatCard
                                bigIcon={<i className="pe-7s-server text-warning" />}
                                statsText="Breakfast"
                                statsValue= {(this.state.data['count_breakfast'] / this.state.data['total'] * 100).toFixed(1) + "%"}
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText = {"Count: " + this.state.data['count_breakfast'] + "/" + this.state.data['total']}
                                
                                />
                        </Col>
                        <Col lg={3} sm={6} 
                         onClick={() => this.showPieChart("Lunch", this.state.data['count_lunch'])}
                         style={{cursor:'pointer'}}>
                            <StatCard
                                bigIcon={<i className="pe-7s-server text-warning" />}
                                statsText="Lunch"
                                statsValue= {(this.state.data['count_lunch'] / this.state.data['total'] * 100).toFixed(1) + "%"}
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText= {"Count: " + this.state.data['count_lunch'] + "/" + this.state.data['total']}
                               />
                        </Col>
                        <Col lg={3} sm={6} 
                         onClick={() => this.showPieChart("High Tea", this.state.data['count_hitea'])}
                         style={{cursor:'pointer'}}>
                            <StatCard
                                bigIcon={<i className="pe-7s-server text-warning" />}
                                statsText="High Tea"
                                statsValue= {(this.state.data['count_hitea'] / this.state.data['total'] * 100).toFixed(1) + "%"}
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText= {"Count: " + this.state.data['count_hitea'] + "/" + this.state.data['total']}  
                            />
                        </Col>
                        <Col lg={3} sm={6} 
                         onClick={() => this.showPieChart("Dinner", this.state.data['count_dinner'])}
                         style={{cursor:'pointer'}}>
                            <StatCard
                                bigIcon={<i className="pe-7s-server text-warning" />}
                                statsText="Dinner"
                                statsValue= {(this.state.data['count_dinner'] / this.state.data['total'] * 100).toFixed(1) + "%"}
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText= {"Count: " + this.state.data['count_dinner'] + "/" + this.state.data['total']}
                            />
                        </Col>
                    </Row>
                </Container>
                {this.state.showchart ? 
                <div>
                    <PieChart chartType={this.state.chartType} chartData={this.state.chartData} date={this.state.selectedDate} endDate={this.state.endDate}/>
                </div> : ''}
             
            </div>
        )
    }
}
export default DailyDetails