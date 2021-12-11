import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"

import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:100;
`
const Wrapper = styled.div`
    display:flex;
    height:100%;
    transition: all 1.5s ease;
    transform:translateX(${props => props.sliderIndex * -100}vw);
`

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:#${props => props.bg}
`

const ImgContainer = styled.div`
    height:100%;
    flex:1;
`
const Image = styled.img` 
    height:80%;

`
const InfoContainer = styled.div` 
    flex:1;
    padding:50px;
`

const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin:50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

function Slider() {
    const [sliderIndex,setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction ==="left"){
            setSliderIndex(sliderIndex  > 0 ? sliderIndex -1 : 2)
        }else{
            setSliderIndex(sliderIndex  < 2 ? sliderIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {sliderItems.map((items)=> {
                    return (
                        <Slide bg={items.bg} key={items.id}>
                            <ImgContainer>
                                <Image src={items.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{items.title}</Title>
                                <Desc>{items.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider
