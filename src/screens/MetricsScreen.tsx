import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Center, SimpleGrid, Button } from '@mantine/core';
import Header from "../components/Header"
import { PieChart, Pie } from 'recharts';
import { apiBaseURL } from '../Config'
import { handleGetMetrics } from '../Utils'

const MetricsScreen = () => {
    const [ climbingMetrics, setClimbingMetrics ] = useState([])
    let [ totalClimbs, setTotalClimbs] = useState(0)

    useEffect(() => {
        (async () => {
          try {
            const metricsRes = await handleGetMetrics()
            let counter = 0
            const newAry = metricsRes.map((metric:any) => {
              const _count = parseInt(metric.count)
              counter += _count
              
              return {grade:metric.grade, count: _count}
          })
            setTotalClimbs(counter)
            setClimbingMetrics(newAry) 
          } catch (err) {
            console.error(err)
          }
        })()
    }, [])

    let renderLabel = function(entry:any) {
      console.log('totalClimbs:', totalClimbs)
        return `V${entry.grade} -${Math.round(entry.count/totalClimbs*100*10)/10}%`;
    }

  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <Header text="grade metrics"/>
       <Center>
        <PieChart width={400} height={400}>
                <Pie data={climbingMetrics} dataKey="count" nameKey="count" cx="50%" cy="50%" outerRadius={50} fill="#090c02" label={renderLabel}/>
            </PieChart>
        </Center> 
    </div>
  )
}
    
export default MetricsScreen 



