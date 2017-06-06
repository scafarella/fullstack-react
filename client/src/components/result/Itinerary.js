import React from 'react';
import './Itinerary.scss'
import Leg from './Leg';
import Price from './Price';

class Itinerary extends React.Component {
  render(){
    return (
        <div className="itinerary">
          <Leg leg={this.props.itinerary.outbound} />
          <Leg leg={this.props.itinerary.inbound} />
          <Price pricingOptions={this.props.itinerary.pricingOptions} />
        </div>
    );
  }
}

export default Itinerary;
