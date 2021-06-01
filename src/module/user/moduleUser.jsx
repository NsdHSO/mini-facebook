import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import InputArea from './moduleInput/InputArea'
import ActionModule from "./moduleActions/ModuleActions";
import { Route, Switch } from "react-router-dom";
import ModuleActionRightSide from './moduleActionRight/ModuleActionsRight'
import ProfileModule from "./profile/ProfileModule";
import ModuleHome from "./moduleHome/ModuleHome";

class ModuleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <React.Fragment>
      <div className="tw-border-b-2 tw-pl-2 tw-shadow-end">
        <div className="tw-bg-white-500 tw-mt-1 tw-ml-2 tw-sticky tw-top-0  tw-flex tw-items-center">
          <div className="tw-flex">
            <FontAwesomeIcon className="tw-text-blue-500 tw-text-5xl" icon={faFacebook} />
            <div className="tw-justify-center tw-items-center tw-flex tw-divide-green-200">
              <InputArea />
            </div>
          </div>
          <div className="tw-flex tw-justify-center tw-flex-grow tw-mx-72 tw-max-w-4xl">
            <ActionModule />
          </div>
          <div className="tw-flex tw-justify-left tw-mr-5" >
            <ModuleActionRightSide />
          </div>
        </div>
      </div>
      <div className="tw-bg-gray-100">
      <Switch >
      <Route path="/profile" component={ProfileModule}></Route>
        <Route path="/" exact component={ModuleHome}>
        </Route>
      </Switch>
      </div>
    </React.Fragment>;
  }
}

export default ModuleUser;
