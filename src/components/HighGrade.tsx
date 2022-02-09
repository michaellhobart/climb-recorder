import React from 'react';
import { Center, Button } from '@mantine/core';


interface HighGradeProps {
    highGrade: number;
    handleSetGrade: (grade:number) => void
}

const HighGrade : React.FC<HighGradeProps> = ({highGrade, handleSetGrade}) => {
    const handleUpGrade = (grade: number) => {
        if (grade <= 16){
            handleSetGrade(grade+1)
        }
    }
    
    const handleDownGrade = (grade: number) => {
        if (grade >= 1){
            handleSetGrade(grade-1)
        }
    }
    return (
        <Center style={{backgroundColor:'#bbc5aa', width: '100%', height: '120px'}}>
            <Button style={{backgroundColor: '#090c02'}} onClick={() => handleDownGrade(highGrade)}>-</Button>
            <h2 style={{textTransform: 'uppercase', marginRight: '2rem', marginLeft: '2rem'}}>{highGrade}</h2>
            <Button style={{backgroundColor: '#090c02'}} onClick={() => handleUpGrade(highGrade)}>+</Button>
        </Center>
    )
}

export default HighGrade