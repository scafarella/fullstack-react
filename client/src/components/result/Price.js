import React from 'react';
import './Price.scss';

class Price extends React.Component {
  render(){
    return (
      <div className="itineraryFooter">
        <div className="price">
          <div className="fare">{this.props.pricingOptions.price}</div>
          <div className="agent">{this.props.pricingOptions.agent}</div>
        </div>
        <div className="select">
          <button>Select</button>
        </div>
      </div>
    );
  }
}
export default Price;
