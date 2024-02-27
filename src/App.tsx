import React from 'react';
import './App.css';

import { BarChartRechart } from './charts/rechart/BarChartRechart';
import { SimpleLineChartReshart } from './charts/rechart/SimpleLineChartReshart';

import BarChartVisx from './charts/visx/BarChartVisx';
import LineChartVisx from './charts/visx/LineChartVisx';
// import {data} from "./charts/data"

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
  {
    "name": "Page AD",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page _",
    "uv": 1490,
    "pv": 2300,
    "amt": 2100,
    "tq" : getRandomInt(1000 , 2000),
  },
  {
    "name": "Page _!",
    "uv": 690,
    "pv": 4300,
    "amt": 2100,
    "tq" : getRandomInt(1000 , 2000),
  },
]


const configBarProps1 = {
  data: data,
  height: 400,
  width: 1000,
  barDetails: {
    bar: [
      { dataKey: 'uv', fill: '#8884d8' },
      { dataKey: 'pv', fill: '#82ca9d' },
      // { dataKey: 'amt', fill: 'red' },
      // { dataKey: 'tq', fill: 'green' },
    ],
  },
  xAxis: { dataKey: 'name' },
  yAxis: { domain: [0, 10000] },
};

const configLineProps1 = {
  data: data,
  height: 400,
  width: 1000,
  LineChartDetails: {
    line: [
      { dataKey: 'uv', fill: '#8884d8' },
      { dataKey: 'pv', fill: '#82ca9d' },
      { dataKey: 'amt', fill: 'red' },
      { dataKey: 'tq', fill: 'green' },
    ],
  },
  xAxis: { dataKey: 'name' },
};

function App() {
  return (
    <div className="App" style={{ marginTop: '40px', padding: '20px' }}>
      <h1>{"Recharts example"}</h1>
        <BarChartRechart {...configBarProps1} />
      <SimpleLineChartReshart {...configLineProps1} />

      <br></br>
      <h1>{"visx example"}</h1>
      <BarChartVisx {...configBarProps1}  />
      <br></br>
      <LineChartVisx  {...configLineProps1} />
    </div>
  );
}

export default App;
