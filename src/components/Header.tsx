import React from 'react';
import { Center } from '@mantine/core';
import { Link } from "react-router-dom";


interface HeaderProps {
    text: string;
    linkText: string;
    linkUrl: string;
}

const Header : React.FC<HeaderProps> = ({text, linkText, linkUrl}) => {
    return (
        <Center style={{backgroundColor:'#bbc5aa', width: '100%', marginBottom: '1rem', height: '120px', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{textTransform: 'uppercase'}}>{text}</h2>
            <Link to={linkUrl}>{linkText}</Link>
        </Center>
    )
}

export default Header

