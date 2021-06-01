import React from 'react';
import './../css/user/sharedTableFormCard.css'
import SharedTableData from './TableInformationData';
import HighchartsGraph from '../../user/moduleHome/center/Highchart';
import Card from './../card/Card';

const SharedTableFromCard = (props) => {
  return (
    <Card className="tw-h-64 tw-mt-3">

      <div className="tw-bg-white tw-grid tw-grid-cols-8 tw-grid-rows-6 tw-h-64 tw-border-white tw-rounded tw-border-4">
        <div className="tw-mt-1 tw-col-span-8 tw-justify-items-center tw-text-center tw-bg-green-500 tw-h-8">
          {props.infoData.title}
        </div>
        <div className="tw-row-start-2 tw-row-end-5 tw-col-start-1 tw-col-end-3">
          <img src={props.infoData.url} />
        </div>
        <div className="tw-row-start-2 tw-row-end-4 tw-col-start-3 tw-col-end-6 tw-ml-2 ">
          <h4 className="tw-flex tw-flex-grow-0 tw-justify-center tw-font-semibold tw-mr-10">Values</h4>
          <SharedTableData tableData={props.infoData.infoStatus} />
        </div>
        <div className="tw-row-start-2 tw-row-end-4 tw-col-start-6 tw-col-end-9">
          <HighchartsGraph data={props.infoData} />

        </div>
        <div className="tw-row-start-5 tw-row-end-7 tw-col-start-1 tw-col-end-6">
          <p className="tw-h-20 tw-overflow-auto">
            {props.infoData.description}
          </p>
        </div>
      </div>
    </Card>);
}

export default SharedTableFromCard;

