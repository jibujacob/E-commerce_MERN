import React from 'react'
import styled from 'styled-components'

import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`

`

const Wrapper = styled.div`
    padding:50px;
    display:flex;
`

const ImgContainer = styled.div`
    flex:1;   
`

const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`

const InfoContainer = styled.div`
    flex:1;
    padding:0 50px ;
`

const Title = styled.h1`
    font-weight:200;
`

const Desc = styled.p`
    margin:20px 0;
`

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0;
    width:50%;
`

const Filter = styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0 5px;
    cursor:pointer;
`

const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`

const FilterSizeOption= styled.option``

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-weight:700;
`

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0 5px;
`

const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
        
    }
`

function Product() {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus ex deserunt, quod enim magnam est vitae! Facere provident vero minus minima incidunt sunt, harum iusto inventore ex totam eius.</Desc>
                    <Price>&#8377; 1500</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <AddIcon/>
                            <Amount>1</Amount>
                            <RemoveIcon/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
