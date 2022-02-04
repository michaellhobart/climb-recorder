import React, { useState, useEffect } from 'react'
import { Center, SimpleGrid, Button } from '@mantine/core';
import Header from "../components/Header"
import ButtonPad from "../components/ButtonPad"
import HighGrade from "../components/HighGrade"


const ClimbInputScreen  : React.FC<{}> = () => {
    const [highGrade, setHighGrade] = useState(1)

    const getRes = async (url:string) => {
        const res = await fetch(url)
        return await res.json()
    }

    const handleSetGrade = (grade:number) => setHighGrade(grade)
    return (
        <>
            <Center style={{width: '100%', display: 'flex', flexDirection:'column' }} >
                <Header text="boulder climb recorder"/>
                <ButtonPad highGrade={highGrade} />
                <HighGrade highGrade={highGrade} handleSetGrade={handleSetGrade}/>
            </Center>
        </>
    )
}
    
export default ClimbInputScreen 



