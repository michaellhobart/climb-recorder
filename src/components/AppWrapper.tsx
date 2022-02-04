import React from 'react'
import { Center } from '@mantine/core';

const AppWrapper : React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Center style={{ width: '100%', height: '100vh', backgroundColor: '#e6eed6'}}>
             <div style={{width: '480px', height: '100vh', backgroundColor: '#dde2c6'}}>
             {children}
             </div>
        </Center>
    )
}
    
export default AppWrapper