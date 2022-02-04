import { useState } from 'react'
import { Center, SimpleGrid, Button } from '@mantine/core';
import Header from "../components/Header"
import ButtonPad from "../components/ButtonPad"
import HighGrade from "../components/HighGrade"


const ClimbInputScreen  : React.FC<{}> = () => {
    const [highGrade, setHighGrade] = useState(1)

    const handleSetGrade = (grade:number) => setHighGrade(grade)
    return (
        <div style={{width: '480px', height: '100vh', backgroundColor: '#dde2c6'}}>
            <Center style={{width: '100%', display: 'flex', flexDirection:'column' }} >
                <Header text="boulder climb recorder"/>
                <ButtonPad highGrade={highGrade} />
                <HighGrade highGrade={highGrade} handleSetGrade={handleSetGrade}/>
            </Center>
        </div>
    )
}
    
export default ClimbInputScreen 


