import React from 'react';
import Header from './Header.js';
import SubHeader from './SubHeader.js';
import Itineraries from './Itineraries.js';
import moment from 'moment';
import './Result.scss';

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: null
    };
  }

  getFromDate(){
    var today = moment();
    return today.add((7-today.isoWeekday() + 1),'days').format('YYYY-MM-DD');
  }

  getToDate(fromDate){
    return moment(fromDate, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD');
  }

  componentDidMount(){
    var fromDate = this.getFromDate();
    var toDate = this.getToDate(fromDate);
    const req = {
        adults: 1,
        class: 'Economy',
        toPlace: 'LOND-sky',
        fromPlace: 'EDI-sky',
        toDate: toDate,
        fromDate: fromDate
    };

    console.log('fetching results from server...');

    var queryParams = `adults=${req.adults}&class=${req.class}&toPlace=${req.toPlace}&fromPlace=${req.fromPlace}&toDate=${req.toDate}&fromDate=${req.fromDate}`;
    console.log('queryParams ' + queryParams);
    fetch('http://localhost:4000/api/search?' + queryParams)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.setState({results: results});
    })
    .catch(console.error);
  }

  render(){
    if(this.state.results == null){
      return <div className="spinner"></div>
    }else{
      return (
        <div className="wrapper">
          <Header header={this.state.results.header} />
          <SubHeader />
          <Itineraries itineraries={this.state.results.itineraries} />
        </div>
      );
    }
  }
}
export default Result;
