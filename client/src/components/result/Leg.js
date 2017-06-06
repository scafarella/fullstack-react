import React from 'react';
import './Leg.scss';
class Leg extends React.Component{

  render(){
    return(
      <div className="leg">
        <div className="container">
          <img src={this.props.leg.carrier.imageUrl} alt={this.props.leg.carrier.name} />
          <div className="from">
            <div>
              {this.props.leg.departure}
            </div>
            <div className="place">
              {this.props.leg.from}
            </div>
          </div>
          <div className="to">
            <div>
              <div>
                {this.props.leg.arrival}
              </div>
              <div className="place">
                {this.props.leg.to}
              </div>
            </div>
          </div>
        </div>
        <div className="duration">
          <div>{this.props.leg.duration}</div>
          <div className={this.props.leg.stops===0?'direct':'indirect'}>{this.props.leg.stops===0?'Direct': this.props.leg.stops + ' Stop'}</div>
        </div>
      </div>
    );
  }
}

export default Leg;
