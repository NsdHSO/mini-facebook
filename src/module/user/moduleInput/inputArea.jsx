import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const InputArea = () => {
  const [a, b] = useState()
  return (
    <div className="tw-justify-center tw-items-center tw-flex tw-rounded-full tw-h-0 tw-ml-2 tw-text-gray-500">
      <div className="tw-bg-gray-200 text-white tw-rounded-full tw-bg-gray-100 hover:tw-bg-gray-200 ">
        <div className="tw-flex  tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-full ">
          <FontAwesomeIcon className="tw-text-gray-300 tw-text-2xl tw-mt-1 tw-ml-2" icon={faSearch} />
          <input type="text" value={a} className="form-control-plaintext tw-text-m tw-rounded-full tw-outline-none tw-text-gray-500 tw-w-52 tw-h-8 tw-bg-gray-100 hover:tw-bg-gray-200 hover:tw-border-gray-500" id="staticEmail" placeholder="Search Facebook"></input>
        </div>
      </div>
    </div>
  );
}

export default InputArea;