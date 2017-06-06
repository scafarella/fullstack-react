import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render(){
    return(
      <div className="resultHeader">
        <div className="heading">
          <span className="from">{this.props.header.from} </span><span>{this.props.header.to}</span>
        </div>
        <div>
          {this.props.header.travellers} travellers, {this.props.header.class}
        </div>
      </div>
    );
  }
}
export default Header;
