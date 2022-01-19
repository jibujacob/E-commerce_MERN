import React, { useState } from 'react'
import styled from 'styled-components'

import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../Responsive';

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`

const Description = styled.div`
    font-size:24px;
    margin-bottom:20px;
    font-weight:300;
    ${mobile({textAlign:"center"})};

`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({width:"80%"})};

`

const Input = styled.input`
    /* height:100%; */
    border:none;
    flex:8;
    height:100%;
    padding-left:20px;

    
`

const Button = styled.button`
    flex:1;
    height:100%;
    padding:10px;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
`

function Newsletter() {
    const [email,setEmail] = useState("");
    const handleClick = () => {
        //Placeholder code
        setEmail("");
        alert("Thank you for subscribing to out news letter!")
    }

    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products.</Description>
            <InputContainer>
                <Input value={email} type="email" placeholder="Your email" onChange={e => setEmail(e.target.value)}/>
                <Button onClick={handleClick}>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
