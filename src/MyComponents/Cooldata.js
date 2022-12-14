// import React from 'react'
import './style.css'

// import React from 'react';
import Papa from 'papaparse';
import Chart from 'react-google-charts'

import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import React, { useState, useEffect } from 'react';

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

  const data =[10, 41, 35, 51, 49, 62, 69, 91, 148];
  const series = [{
    name: "Desktops",
    data: data.slice()
  }];

  const options = {
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Dynamic Updating Chart',
      align: 'left'
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      range: 10,
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: false
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

    useEffect(()=>{
    window.setInterval(() => {
      getNewSeries(28, {
        min: 10,
        max: 90
      })

      ApexCharts.exec('realtime', 'updateSeries', [{
        data: data,
      }])
    }, 1000)
  })

  

  return (
    <>
      <div className='head'>COOL DATA</div>
      <div className="graphs">
        {/* <div className="graphsub">
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
        </div> */}
        <ReactApexChart options={options} series={series} type="line" height={200} />

    
      </div>
    </>
  )
}




// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis } from 'recharts';

// const LiveChart = () => {
//   const [data, setData] = useState([]);

//   // Use the useEffect hook to fetch the data from the JSON file
//   // when the component mounts
//   useEffect(() => {
//     fetch('data.json')
//       .then(response => response.json())
//       .then(json => setData(json));
//   }, []);

//   // Update the chart data every second
//   setInterval(() => {
//     setData(data.map(d => ({ x: d.x + 1, y: d.y + 1 })));
//   }, 1000);

//   return (
//     <LineChart width={400} height={400} data={data}>
//       <Line type="monotone" dataKey="y" stroke="#8884d8" />
//       <XAxis dataKey="x" />
//       <YAxis />
//     </LineChart>
//   );
// };

// export default LiveChart;
