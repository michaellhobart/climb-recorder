import React from 'react'
import { Center } from '@mantine/core';

const AppWrapper : React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Center style={{ width: '100%', height: '100vh', backgroundColor: '#e6eed6'}}>
            {children}
        </Center>
    )
}
    
export default AppWrapper