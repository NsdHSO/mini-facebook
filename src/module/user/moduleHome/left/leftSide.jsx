import React from 'react';
import ImageAction from './images';

const LeftSideSidenav = (props) => {
  return (
    <React.Fragment>
      <div className="tw-ml-2 tw-mt-2 tw-w-97 ">
        <ImageAction />
        {props.data.map((resp) => (
          <div className="tw-mt-3 tw-bg-gray-200 text-white tw-bg-white hover:tw-bg-gray-500 tw-justify-center tw-items-center tw-h-12 tw-rounded-2xl">
            <div className=" tw-transition tw-duration-200 tw-ease-in-out tw-justify-start tw-flex tw-bg-white hover:tw-bg-gray-300 tw-h-12 tw-rounded-2xl">

              <p className="tw-items-center tw-flex  tw-ml-3">{resp.age}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>);
}

export default LeftSideSidenav;