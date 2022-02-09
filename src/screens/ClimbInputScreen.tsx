import React, { useState, useEffect } from 'react'
import { Center, SimpleGrid, Button } from '@mantine/core';
import Header from "../components/Header"
import ButtonPad from "../components/ButtonPad"
import HighGrade from "../components/HighGrade"


const ClimbInputScreen  : React.FC<{}> = () => {
    const [highGrade, setHighGrade] = useState(6)
    const handleSetGrade = (grade:number) => setHighGrade(grade)
    return (
        <>
            <Center style={{width: '100%', height: '100vh', display: 'flex', flexDirection:'column' }} >
                
                <div style={{width: '100%', flexGrow: 1}}>
                    <Header text="boulder climb recorder"/>
                    <ButtonPad highGrade={highGrade} />
                </div>
                
                <HighGrade highGrade={highGrade} handleSetGrade={handleSetGrade}/>
            </Center>
        </>
    )
}
    
export default ClimbInputScreen 



