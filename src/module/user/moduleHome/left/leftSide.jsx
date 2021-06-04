import React from "react";
import ImageAction from "./Profile";
import PerfectScrollbar from "react-perfect-scrollbar";

const LeftSideSidenav = (props) => {
  return (
    <React.Fragment>
      <PerfectScrollbar>
        <div className="tw-ml-2 tw-mt-2 tw-w-97 ">
          <ImageAction />
          {props.data.map((resp) => (
            <div className="tw-mt-3 tw-bg-gray-200 text-white tw-bg-gray-100 hover:tw-bg-gray-500 tw-justify-center tw-items-center tw-h-12 tw-rounded-2xl">
              <div className="tw-grid tw-grid-cols-3 tw-transition tw-duration-200 tw-ease-in-out tw-bg-gray-100 hover:tw-bg-gray-300 tw-h-12 tw-rounded-2xl">
                <div className="tw-col-start-1 tw-col-end-1">
                  <span>{resp.name}</span>
                </div>
                <div className="tw-col-start-2 tw-col-end-2">
                  <span> {resp.designation}</span>
                </div>
                <div className="tw-col-start-3 tw-col-end-3">
                  <span> {resp.language}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PerfectScrollbar>
    </React.Fragment>
  );
};

export default LeftSideSidenav;
