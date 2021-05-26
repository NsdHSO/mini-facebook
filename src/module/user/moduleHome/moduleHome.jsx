import React, { Component } from 'react';
import LeftSideSidenav from './left/leftSide';
 

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
        <div className="tw-sticky tw-items-center tw-top-0 tw-flex">
          <div className="tw-flex tw-w-600">
            <LeftSideSidenav />
          </div>
          <div className="tw-flex tw-justify-center tw-center-grow tw-min-800">
              <h1>Center</h1>
          </div>
          <div className="tw-flex tw-justify-end ">
            <h1>Sami</h1>
          </div>
        </div>
      </React.Fragment>
      );
  }
}
 
export default ModuleHome;