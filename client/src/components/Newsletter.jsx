import React from 'react'
import styled from 'styled-components'

import SendIcon from '@mui/icons-material/Send';

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
`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid lightgray;
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
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products.</Description>
            <InputContainer>
                <Input type="email" placeholder="Your email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
