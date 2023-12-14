import {  CgProfile } from "react-icons/cg";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer} from "recharts"
import './index.css'
import LineCharts from "../LineChart";
import BarCharts from "../BarChart";
import Header from "../Header";
const data = [
  {
    healthRate: 30,
    biologicalType:"Gut Health"
  },
  {
    healthRate: 34,
    biologicalType: "Brain Health",
  },
  {
    healthRate: 22,
    biologicalType: "Haert Health",
  },
]

const plotText = ({ value,cx,cy, name,innerRadius,outerRadius,midAngle }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
return(
  <text  x={x} y={y}textAnchor={x > cx ? 'start' : 'end'} fill='white' dominantBaseline="central">
    {`${value}`}
  </text>
)}


const Health = (props)=>
    (
      <div className="main-container">
        <Header/>
        <div className = 'bg-container'>
          <div className="search-container">
          <input placeholder="Search" type='search' className="search-element"/>
          <button type='button' className="home-btn">
                  Add
                </button>
        </div>
          <div className="welcome-container">
            <div>
              <h1 className="welcome-heading">Welcome to your Dashboard</h1>
              <button className="home-btn">Go to Home</button>
              </div>
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1702526658/upgradeImage_bmvqdv.svg' alt='' className="welcome-image"/>
              </div>
            <div className = 'profile-container'>
                <CgProfile className = "profile-image" />
                <h1 className="profile-heading">Meesala Vamsi</h1>
                <div className="container1">
                    <p>Age: </p>
                    <p className="some-text">20 Years</p>
                </div>
                <div className="container1">
                    <p>Blood Group: </p>
                    <p className="some-text">O+</p>
                </div>
                <div className = "container1">
                    <p>Height: </p>
                    <p className="some-text">5.9</p>
                </div>
                <div className = "container1">
                    <p>Weight: </p>
                    <p className="some-text">70 Kgs</p>
                </div>
            </div>
            <div className="biological-container">
              <ResponsiveContainer width={window.innerWidth > 768 ? 400 : 300} height={window.innerWidth > 768 ? 300 : 320}>
                  <PieChart>
                      <Pie
                      cx="47%"
                      cy="43%"
                      labelLine={false}
                    label={plotText}
                      data={data}
                      innerRadius="0"
                      outerRadius={100}
                      dataKey="healthRate"
                      >
                      <Cell name = "Gut Health" fill = "#fecba6" />
                      <Cell name = "Brain Health" fill      = "#b3d23f" />
                      <Cell name = "Heart Health" fill    = "#a44c9e" />
                      </Pie>
                      <Legend  
                      iconType="square"
                      layout="vertical"
                      verticalAlign="bottom"
                      
                      />
                  </PieChart>
              </ResponsiveContainer>
            </div>
            <BarCharts/>
            <LineCharts/>
        </div>
       
        </div>
    )


export default Health