import React from 'react'
import styled from 'styled-components'

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../Responsive'

const Container  = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
`
const Wrapper  = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
    flex-direction:column;
    height:50vh;

    ${mobile({height:"40vh"})};
`

const Title = styled.h1`
    margin-bottom:20px;

`

const Content = styled.p`

`

const Cancel = () => {
    return (
        <Container data-testid="CancelPage">
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>Order Cancelled</Title>
                <Content>
                  Facing Issue in completing the transaction.
                  Please try in some time
                  If you have any questions, please email :
                  <a href="mailto:contact@jj.com">contact@jj.com</a>.
                </Content>
            </Wrapper>
            <Footer/>
        </Container> 
    )
}

export default Cancel
