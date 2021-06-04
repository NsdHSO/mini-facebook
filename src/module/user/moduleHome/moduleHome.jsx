import React, { Component } from "react";
import LeftSideSidenav from "./left/LeftSide";
import ModuleCenter from "./center/ModuleCenter";
import axios from "axios";
import AddNewNote from "./center/NewNoteSenzor";
import FilterSenzor from "./center/filterSenzor/filterSenzor";
import ModuleRight from "./right/RightModule";

const API = "https://greeniot.herokuapp.com";

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: [],
      show: null,
      oldValue: [],
      notes: [],
      films: [],
    };
  }

  async getFilmsStarWars() {
    let films = await axios
      .get("https://swapi.dev/api/species", {
        method: "GET",
      })
      .then((res) => {
        this.setState({ films: res.data.results });
      })
      .catch();
  }

  async componentDidMount() {
    let value = await axios.get(`${API}` + `/garden/senzors`).then((resp) => {
      return resp.data;
    });
    this.setState({ action: value, oldValue: value });
    let notes = await axios.get(`${API}` + "/chat/msg-chat").then((resp) => {
      return resp.data;
    });

    this.getFilmsStarWars();
    this.setState({ notes: notes });
  }

  filteredSenzorOn = (actions) => {
    let newSenzor =
      actions === "All"
        ? this.state.oldValue
        : this.state.oldValue.filter((resp) => resp.title === actions);
    this.setState({ action: newSenzor });
  };

  saveChatMessage = (event1) => {
    this.setState({ notes: [event1, ...this.state.notes] });
  };

  render() {
    return (
      <React.Fragment>
          <div className="tw-sticky tw-top-0 tw-flex tw-min-h-full.hd">
            <div className="tw-flex tw-w-600">
              <LeftSideSidenav data={this.state.films} />
            </div>
            <div className="tw-center-grow tw-min-800 ">
              <AddNewNote onChatSave={this.saveChatMessage} />
              <FilterSenzor
                onFilteredSenzor={this.filteredSenzorOn}
                dataSend={this.state.action}
              />
              <ModuleCenter data={this.state.action} />
            </div>
            <div className="tw-flex tw-ml-10 tw-mt-1 tw-w-110">
              <div className="tw-w-99">
                <ModuleRight data={this.state.notes} />
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default ModuleHome;
