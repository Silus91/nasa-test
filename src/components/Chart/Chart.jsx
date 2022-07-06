import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import "./Chart.css";

const LineChart = ({apiData}) => {
  let orderedArray = apiData.sort((a,b) => a.missDistance - b.missDistance);
  const xArrayData = orderedArray.map(arry => arry.avgSize);
  const yArrayData = orderedArray.map(arry => arry.missDistance);

  return (
    <div>
      <div className="card">
        <div className='card-header'> 
          <h2 className="center-align header">NASA API</h2>
        </div>
      <div className="card-content">     
        <Line 
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false
            }}
          data={{
            labels: yArrayData,
            datasets: [{
              label: 'Distance from Earth in lunar distances to Avg size of asteroid in Meters',
              data: xArrayData,
              borderColor: [
                'rgb(255, 100, 100)',
                'rgb(0, 255, 255)',
                'rgb(255, 206, 0)',
                'rgb(255, 0, 255)',
                'rgb(153, 102, 255)',
                'rgb(50, 159, 64)'
              ],
              borderWidth: 2
            }]
          }}
        />
      </div>
      <div className="card-footer">
        <p className="center-align header">
          Distance from Earth in Lunar Distance LD.<br />
          The lunar distance is approximately 400,000 km 
        </p>


      </div>
    </div>
    </div>
  )
}

export default LineChart;
