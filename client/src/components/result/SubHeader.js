import React from 'react';
import './SubHeader.scss';

class SubHeader extends React.Component{

  render(){
    return(
      <div className="subheader">
        <span className="filter">Filter</span>
        <span>Sort</span>
        <span className="alert">Price alerts</span>
      </div>
    );
  }
}

export default SubHeader;
