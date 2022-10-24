// import React from 'react'
import './style.css'

import React from 'react';
import Papa from 'papaparse';
import Chart from 'react-google-charts'


// const LineData = fetch('./graph1.csv')
const LineChartOptions = {
  hAxis: {
    title: 'x axis',
  },
  vAxis: {
    title: 'y axis',
  },
  series: {
    1: { curveType: 'function' },
  },
}
export default function Cooldata(props) {

  // const file = 'graph.csv'

  // const linedata = Papa.parse('graph.csv'.files[0], {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: function (results) {
  //       console.log(results.data)
  //       // linedata= results.data
  //     },
  //   });

 
  return (
    <>
      <div className='head'>COOL DATA</div>
      <div className="graphs">
        <div className="graphsub">
          <div className="container mt-1">
            <Chart
              width={'15vw'}
              height={'15vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={props.graphdata}
              options={LineChartOptions}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
          <div className="container mt-1">
            <Chart
              width={'15vw'}
              height={'15vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={props.graphdata}
              options={LineChartOptions}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
          <div className="container mt-1">
            <Chart
              width={'15vw'}
              height={'15vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={props.graphdata}
              options={LineChartOptions}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
        </div>
        <div className="graphsub">
          <div className="container mt-1">
            <Chart
              width={'15vw'}
              height={'15vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={props.graphdata}
              options={LineChartOptions}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
          <div className="container mt-1">
            <Chart
              width={'15vw'}
              height={'15vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={props.graphdata}
              options={LineChartOptions}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
          <div className="container mt-1">
            <Chart
              width={'15vw'}
              height={'15vh'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={props.graphdata}
              options={LineChartOptions}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
