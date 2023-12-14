import {ResponsiveContainer,LineChart,XAxis,YAxis,Line,} from 'recharts'

import './index.css'
const data = [
    { type:"Vitamin A", mcg: 40 },
    { type:"Vitamin B", mcg: 15 },
    { type:"Vitamin C", mcg: 20 },
  ];

const LineCharts=()=>(
    <div className='vitamin-container'>
        <ResponsiveContainer width="100%" height={window.innerWidth > 768 ? 350 : 320}>
    <LineChart data={data}>
    <XAxis dataKey="type"/>
    <YAxis dataKey="mcg" label="Micrograms Mcg" rotation={-42} />
    <Line type="monotone" dataKey="mcg" stroke="green" />
  </LineChart>
  </ResponsiveContainer>
  </div>
)

export default LineCharts