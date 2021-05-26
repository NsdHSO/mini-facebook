import React from 'react';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faBell, faCaretDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';


const ModuleActionRightSide = () => {
  let style = {width:"40px"}
  return (
    <React.Fragment>
      <div className="tw-flex">
        <div className="tw-justify-center tw-items-center tw-flex tw-rounded-full tw-h-0 tw-ml-2 tw-text-gray-500">
          <NavLink to="profile">
            <div className="tw-bg-gray-200 text-white tw-rounded-full tw-bg-gray-100 hover:tw-bg-gray-200 tw-justify-center tw-items-center">
              <div className="tw-flex  tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-full ">
                <FontAwesomeIcon className="tw-text-black tw-text-2xl tw-mt-1 tw-ml-2" icon={faUserCircle} />
                <h1 className="tw-mr-2 tw-items-center tw-flex">Profile</h1>
              </div>
            </div>
          </NavLink>
          <NavLink to="profile">
            <div className="tw-bg-gray-200 text-white tw-rounded-full tw-bg-gray-100 hover:tw-bg-gray-200 " style={style}>
              <div className="tw-flex  tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-full tw-justify-center tw-items-center">
                <FontAwesomeIcon className="tw-text-black tw-text-2xl tw-mt-1  " icon={faEllipsisV} />
              </div>
            </div>
          </NavLink>
          <NavLink to="profile">
            <div className="tw-bg-gray-200 text-white tw-rounded-full tw-bg-gray-100 hover:tw-bg-gray-200 " style={style}>
              <div className="tw-flex  tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-full tw-justify-center tw-items-center">
                <FontAwesomeIcon className="tw-text-black tw-text-2xl tw-mt-1" icon={faFacebookMessenger} />
              </div>
            </div>
          </NavLink>
          <NavLink to="profile">
            <div className="tw-bg-gray-200 text-white tw-rounded-full tw-bg-gray-100 hover:tw-bg-gray-200 " style={style}>
              <div className="tw-flex  tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-full tw-justify-center tw-items-center">
                <FontAwesomeIcon className="tw-text-black tw-text-2xl tw-mt-1" icon={faCaretDown} />
              </div>
            </div>
          </NavLink>
          <NavLink to="profile">
            <div className="tw-bg-gray-200 text-white tw-rounded-full tw-bg-gray-100 hover:tw-bg-gray-200 " style={style}>
              <div className="tw-flex  tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-full tw-justify-center tw-items-center">
                <FontAwesomeIcon className="tw-text-black tw-text-2xl tw-mt-1" icon={faBell} />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModuleActionRightSide;