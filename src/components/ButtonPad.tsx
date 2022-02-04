import { SimpleGrid, Button } from '@mantine/core';

interface ButtonPadProps {
    highGrade: number;
}


const ButtonPad : React.FC<ButtonPadProps> = ({highGrade}) => {
    return (
        <>
            <SimpleGrid style={{width: '100%', padding: '2rem'}} cols={3}>

                {[ ...Array(highGrade+1) ].map((_, idx) => {
                    return (
                        <Button key={idx} style={{height: '60px', backgroundColor: "#a72608"}} onClick={(e: any) => console.log("idx:", idx)}>{`V${idx}`}</Button>
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default ButtonPad