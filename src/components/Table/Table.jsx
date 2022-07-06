import React, { useState } from 'react'
import "./Table.css";

const  Table = ({apiData}) =>{

  const [order, setOrder] = useState("ASC");
  const [data, setData] = useState(apiData);

  const sorting = (col) => {
    if (order === "ASC") {
       const sorted = [...data].sort((a,b) =>
      a[col] > b[col] ? 1 :-1);
      setOrder("DSC");
      setData(sorted);
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a,b) =>
      a[col] < b[col] ? 1 :-1);
      setOrder("ASC");
      setData(sorted);
    }
  }

  return (
    <div>
      <h2 className="center-align header"> NASA's "Asteroids - NeoWs"</h2>
      <table className="striped highlight centered">
        <thead className="teal lighten-2">
          <tr>
          <th>Index</th>
          <th>Name</th>
          <th >   
            <a 
              className="black-text sortButton" 
              onClick={() => sorting('missDistance')}
            >
              Miss Distance Lunar
              <i className="material-icons right">import_export</i>
            </a>
          </th>
          <th>
            <a 
              className="black-text sortButton" 
              onClick={() => sorting('avgSize')}
            >
              Average Size
              <i className="material-icons right">import_export</i>
            </a>
          </th>
          <th>Close Approach Date</th>
          <th>
            <a 
              className="black-text sortButton" 
              onClick={() => sorting('speed')}
            >
              Relative Velocity in KM/h
              <i className="material-icons right">import_export</i>
            </a>
          </th>
          <th>URL</th>
          </tr>
        </thead>
          <tbody>
            {data.map((asteroid,idx) => {
              return (
                <tr 
                  className="centered"
                  key={asteroid.id}
                >
                  <td> {idx+1}</td>
                  <td>{asteroid.name}</td>
                  <td>{asteroid.missDistance}</td>
                  <td>{asteroid.avgSize}m</td>
                  <td>{asteroid.closeApproachDate}</td>
                  <td>{asteroid.speed}</td>
                  <td><a href={asteroid.url}>Link</a></td>
                </tr>
              );
            })}
          </tbody>
      </table>
    </div>
  )
}

export default Table;

