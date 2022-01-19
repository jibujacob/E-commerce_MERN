import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'

import { mobile } from '../Responsive'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background : linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
        ),
        url("/login.jpeg") 
        center;  
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
    ${mobile({width:"75%"})};
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;

`

const Form = styled.form`
    display:flex;
    flex-direction:column;

`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding:10px;

`
const Error = styled.span`
    margin:10px 0;
    text-align:center;
    color:red;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;

    &:disabled {
        cursor: none;
        background-color:#668585;
    }
`

const Link = styled.a`
    margin:5px 0;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const { isFetching,error} = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch,{username,password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" 
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input type="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Error>Something went wrong</Error>}
                    <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
