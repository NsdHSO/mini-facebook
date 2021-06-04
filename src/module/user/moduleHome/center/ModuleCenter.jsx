import React, { Component } from "react";
import SharedTableFromCard from "../../../shared/user/Share-leftSide";
import PerfectScrollbar from "react-perfect-scrollbar";

class ModuleCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PerfectScrollbar style={{height:"750px"}}>
        <React.Fragment>
          {this.props.data.map((resp) => (
            <SharedTableFromCard infoData={resp} />
          ))}
        </React.Fragment>
      </PerfectScrollbar>
    );
  }
}

export default ModuleCenter;
