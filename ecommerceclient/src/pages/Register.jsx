import React , { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components'
import { register } from '../redux/apiCalls'

import { mobile } from '../Responsive'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background : linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
        ),
        url("/register.jpeg") 
        center;  
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:40%;
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
    flex-wrap:wrap;

`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding:10px;

`

const Agreement = styled.span`
    font-size:12px;
    margin:20px 0 ;
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

    &:disabled{
        cursor: none;
        background-color:#668585;
    }
`

function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("")
    const dispatch = useDispatch();

    const handleRegister = (e)=>{
        e.preventDefault();
        if(password === confirmPassword){
            register(dispatch,{
                username,email,password
            });
        }else{
            alert("Password and Confirm Password not matching");
        }
    }

    const { isFetching,error} = useSelector(state => state.user);
    
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <Input type="email" placeholder="Email" 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input type="password" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Input type="password" placeholder="Confirm Password" 
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <Agreement>By creating an account , I consent to
                        the processing of my personal data in 
                        accordance with the <strong>PRIVACY POLICY</strong></Agreement>
                    {error && <Error>Something went wrong</Error>}
                    <Button onClick={handleRegister} disabled={isFetching}>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
