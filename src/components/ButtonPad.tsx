import { SimpleGrid, Button, Modal } from '@mantine/core';
import React, { useState } from 'react';
import { addClimb } from '../Utils'

interface ButtonPadProps {
    highGrade: number;
}

const ButtonPad : React.FC<ButtonPadProps> = ({highGrade}) => {
    const [opened, setOpened] = useState(false)

    const handleAddClimb = async (grade:number) => {
        setOpened(true)
        const res = await addClimb(grade)
        setTimeout(() => setOpened(false), 1000)
    }
    return (
        <>
            <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            hideCloseButton
            >
                Your climb has been added.
            </Modal>
            <SimpleGrid style={{width: '100%', padding: '2rem'}} cols={3}>

                {[ ...Array(highGrade+1) ].map((_, idx) => {
                    return (
                        <Button key={idx} style={{height: '60px', backgroundColor: "#a72608"}} onClick={() => handleAddClimb(idx)}>{`V${idx}`}</Button>
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default ButtonPad