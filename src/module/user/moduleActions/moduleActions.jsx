import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome ,faUserFriends, faPlay, faBullhorn, faUsers} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ActionModule = () => {
  return (<React.Fragment>
    <div className="tw-flex tw-space-x-16 tw-md:space-x-2 tw-mr-10 ">
      <NavLink to="/">
        <div  className="tw-flex">
          <FontAwesomeIcon className="tw-text-gray-300 tw-text-2xl tw-mt-1 tw-ml-2 active" icon={faHome} />
        </div>
      </NavLink>
      <NavLink to="/friend">
        <div  className="tw-flex">
          <FontAwesomeIcon className="tw-text-gray-300 tw-text-2xl tw-mt-1 tw-ml-2" icon={faUserFriends} />
        </div>
      </NavLink>
      <NavLink to="/state">
        <div  className="tw-flex">
          <FontAwesomeIcon className="tw-text-gray-300 tw-text-2xl tw-mt-1 tw-ml-2" icon={faPlay} />
        </div>
      </NavLink>
      <NavLink to="/marketplace">
        <div  className="tw-flex">
          <FontAwesomeIcon className="tw-text-gray-300 tw-text-2xl tw-mt-1 tw-ml-2" icon={faBullhorn} />
        </div>
      </NavLink>
      <NavLink to="/comunity">
        <div  className="tw-flex">
          <FontAwesomeIcon className="tw-text-gray-300 tw-text-2xl tw-mt-1 tw-ml-2" icon={faUsers} />
        </div>
      </NavLink>
    </div>
  </React.Fragment >);
}

export default ActionModule;