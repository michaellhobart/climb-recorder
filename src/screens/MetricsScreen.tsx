import React, { useState, useEffect } from 'react'
import { Center } from '@mantine/core';
import Header from "../components/Header"
import { PieChart, Pie } from 'recharts';
import { handleGetMetrics } from '../Utils'

interface metricsValues {
  grade: number,
  count: string
}

const MetricsScreen = () => {
    const [ climbingMetrics, setClimbingMetrics ] = useState([])
    useEffect(() => {
        (async () => {
          try {
            const metricsRes = await handleGetMetrics()
            const newAry = metricsRes.map((metric:metricsValues) => {
              return {grade:metric.grade, count:parseInt(metric.count)}
          })
              setClimbingMetrics(newAry) 
          } catch (err) {
            console.error(err)
          }
        })()
    }, [])

    let renderLabel = function( entry:{ grade: number, count: number, percent: number } ) {
        return `V${entry.grade} ( ${Math.round((entry.percent * 100)*10)/10}% )`;
    }

  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <Header text="grade metrics" linkText='Home' linkUrl='/'/>
       <Center>
        <PieChart width={400} height={400}>
                <Pie data={climbingMetrics} dataKey="count" nameKey="count" cx="50%" cy="50%" outerRadius={70} fill="#090c02" label={renderLabel}/>
            </PieChart>
        </Center> 
    </div>
  )
}
    
export default MetricsScreen 



