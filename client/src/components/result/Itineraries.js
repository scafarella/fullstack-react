import React from 'react';
import Itinerary from './Itinerary.js'
import './Itineraries.scss';

class Itineraries extends React.Component {
  render(){
    return (
      <div>
        <div className="itineraries">
          {this.props.itineraries.map(function(itinerary){
            return <Itinerary key={itinerary.outbound.id + '_' + itinerary.inbound.id }
                  itinerary={itinerary} />
          })}
        </div>
      </div>
    );
  }
}

export default Itineraries;
