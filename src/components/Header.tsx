import { Center } from '@mantine/core';

interface HeaderProps {
    text?: string;
}

const Header : React.FC<HeaderProps> = ({text}) => {
    return (
        <Center style={{backgroundColor:'#bbc5aa', width: '100%', marginBottom: '1rem', height: '120px'}}>
            <h2 style={{textTransform: 'uppercase'}}>{text}</h2>
        </Center>
    )
}

export default Header

