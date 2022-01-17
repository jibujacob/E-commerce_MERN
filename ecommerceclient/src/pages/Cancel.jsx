import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Container  = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper  = styled.div`
    padding:20px;
`

const Cancel = () => {
    const location = useLocation();
    console.log(location)
    return (
        <Container>
            <Wrapper>
                Failed
            </Wrapper>
        </Container> 
    )
}

export default Cancel
