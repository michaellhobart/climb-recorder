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
        <Center style={{backgroundColor:'#bbc5aa', width: '100%', marginBottom: '1rem', height: '120px'}}>
            <Button onClick={() => handleDownGrade(highGrade)}>-</Button>
            <h2 style={{textTransform: 'uppercase', marginRight: '2rem', marginLeft: '2rem'}}>{highGrade}</h2>
            <Button onClick={() => handleUpGrade(highGrade)}>+</Button>
        </Center>
    )
}

export default HighGrade