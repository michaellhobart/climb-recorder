import { apiBaseURL } from './Config'
import axios from 'axios'


export const addClimb = async (grade:number) => {
    fetch(`${apiBaseURL}/climbs`, {  
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "grade": grade
        }),
    })
    .then(data => {
        return data
    })
}

export const handleGetMetrics = async () => {
  const res = await fetch(`${apiBaseURL}/climbs/date`)
  const resData = await res.json()
  return resData
}