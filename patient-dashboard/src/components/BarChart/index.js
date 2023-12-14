import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    Label
  } from "recharts"

  import './index.css'
  
  const data = [
    {
      disease: "Diabetics",
      state: "low",

    },
    {
      disease: "Autism",
      state:"high",
    },
    {
      disease: "Cardiovascular",
      state:"medium",
    },
  ]

  const plottedData = data.map((item) => ({
    disease: item.disease,
    state: { high: 1, medium: 0.5, low: 0.2 }[item.state],
  }));
  
  const BarCharts = () => {
    
  
    return (
        <div className="bar-container">
        <ResponsiveContainer width="100%" height={window.innerWidth > 768 ? 300 : 320}>
            <BarChart
            data={plottedData}
            margin={{
                top: 5,
            }}
            >
            <XAxis
                dataKey="disease"
                tick={{
                stroke: "gray",
                strokeWidth: 1,
                }}
            />
            <YAxis
                
                tick={{
                stroke: "gray",
                strokeWidth: 0,
                }}
            />
            <Legend
                wrapperStyle={{
                padding: 30,
                }}
            />
            <Bar dataKey="state" name="Disease Status" label='state' fill="#1f77b4" barSize={55} radius={[10, 10, 0, 0]}>
                <Label position='top' x={0.7} y={1} fontSize={30} style={{ fontWeight: "bold" }}>
                    {(data)=>data.state}
                </Label>
            </Bar>
            </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
  
  export default BarCharts