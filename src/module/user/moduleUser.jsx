import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ModuleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <React.Fragment>
        <div className="tw-bg-white-500">
            
        <FontAwesomeIcon icon={["fab", "facebook"]} />
<button>Salut</button>
        </div>

    </React.Fragment>;
  }
}

export default ModuleUser;
