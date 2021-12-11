import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:teal;
    color:white;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`

function Announcement() {
    return (
        <Container>
            Super Deal! Free Shipping on Orders above &#8377;3000
        </Container>
    )
}

export default Announcement
