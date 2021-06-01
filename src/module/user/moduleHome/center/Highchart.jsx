import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighchartsGraph = (props) => {
  const options = {
    chart: {
      height: 200,
      type: 'areaspline',
      width: 250,
    },
    title: {
      text: props.data?.title,
      align: 'left',
      x: 25
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 140,
      y: -10,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
    },
    xAxis: {
      categories: [
        '00 : 00',
        '01 : 00',
        '02 : 00',
        '03 : 00',
        '04 : 00',
        '05 : 00',
        '06 : 00',
        '07 : 00',
        '08 : 00',
        '09 : 00',
        '10 : 00',
        '11 : 00',
        '12 : 00',
        '13 : 00',
        '14 : 00',
        '15 : 00',
        '16 : 00',
        '17 : 00',
        '18 : 00',
      ],
      plotBands: [
        {
          // visualize the weekend
          from: 7.5,
          to: 11.5,
          color: 'rgba(68, 170, 213, .2)',
        },
      ],
    },
    yAxis: {
      title: {
        text: props.data.scala,
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: "",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    series: [
      {
        data: props.data.infoStatus.value.today[0]?.measurement,
        name: "Today"
      },
      {
        data: props.data.infoStatus.value.yesterday[0]?.measurement,
        name: "Yesterday"
      }
    ]
  };
  return (<div>
    <HighchartsReact highcharts={Highcharts} options={options} />

  </div>);
}

export default HighchartsGraph;