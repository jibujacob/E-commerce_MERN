import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mobile } from '../Responsive'

const Container = styled.div`
    flex:1;
    height:70vh;
    margin:3px;
    position:relative;
`

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({height:"20vh"})};
`

const Info = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:600;
`

function CategoryItem({item}) {
    return (
        <Container data-testid="CategoryItem" >
            <Image src={item.img} alt={`${item.title} image`}/>
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.cat}`}>
                <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
