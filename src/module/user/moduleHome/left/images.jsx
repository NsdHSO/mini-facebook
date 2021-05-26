import React from 'react';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const ImageAction = () => {
  return (
    <React.Fragment>
      <div >
        <NavLink to="profile">
          <div className="transition duration-700 ease-in-outtw-duration-500  tw-bg-gray-200 text-white tw-bg-white hover:tw-bg-gray-200 tw-justify-center tw-items-center tw-h-12 tw-rounded-2xl">
            <div className="tw-flex transition duration-700 ease-in-out tw-bg-white hover:tw-bg-gray-200 tw-h-12 tw-rounded-2xl">
              <FontAwesomeIcon className=" transition duration-700 ease-in-out tw-text-black tw-text-4xl tw-mt-1 tw-ml-2" icon={faUserCircle} />
              <h1 className="transition duration-700 ease-in-out tw-mr-2 tw-items-center tw-ml-2 tw-flex">Profile</h1>
            </div>
          </div>
        </NavLink>
      </div>
    </React.Fragment>);
}

export default ImageAction;