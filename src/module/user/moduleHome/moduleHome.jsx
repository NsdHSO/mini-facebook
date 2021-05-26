import React, { Component } from 'react';
import LeftSideSidenav from './left/leftSide';
import { getDataMock } from './../../services/user'

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: []
    }
  }

  componentDidMount() {
    this.setState({action: getDataMock()})
  }
  render() {
    return (
      <React.Fragment>
        <div className="tw-sticky tw-items-center tw-top-0 tw-flex">
          <div className="tw-flex tw-w-600">
            <LeftSideSidenav data={this.state.action}/>
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