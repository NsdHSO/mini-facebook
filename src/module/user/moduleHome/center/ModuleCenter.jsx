import React, { Component } from 'react';
import SharedTableFromCard from '../../../shared/user/Share-leftSide';

class ModuleCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        {this.props.data.map((resp => (
          <SharedTableFromCard infoData={resp}/>
        )))}
      </React.Fragment>
    );
  }
}

export default ModuleCenter;