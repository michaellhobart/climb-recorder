import { apiBaseURL } from './Config'

export const addClimb = async (grade:number) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/climbs`, {  
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