import React from 'react';

const SharedTableData = (props) => {
  return (
    <div className="tw-grid tw-grid-cols-2 tw-grid-rows-4">
      <div>
        Last Start
      </div>
      <div>
        {props.tableData?.lastStart}
      </div>
      <div>
        Last Stop
      </div>
      <div>
        {props.tableData?.lastStop}
      </div>
      <div>
        Humidity      </div>
      <div>
        {props.tableData?.humidity}
      </div>
      <div>
        Running
      </div>
      <div className={props.tableData?.running ? "tw-text-blue-500" : "tw-text-red-500"}>
        {props.tableData?.running ? "Pornit" : "Oprit"}
      </div>

    </div>);
}

export default SharedTableData;