import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import {useDispatch} from "react-redux";
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { mobile } from '../Responsive'

import { addProduct } from '../redux/cartRedux'


const Container = styled.div`

`

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({flexDirection:"column",padding:"10px" })};
`

const ImgContainer = styled.div`
    flex:1;   
`

const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:"40vh"})};
`

const InfoContainer = styled.div`
    flex:1;
    padding:0 50px ;
    ${mobile({padding:"10px"})};
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
    ${mobile({width:"100%"})};
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
    border:1px solid black;

    :focus{
       transform:scale(1.3);
    }

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
    ${mobile({width:"100%"})};
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
const AddIconButton = styled(AddIcon)`
    cursor:pointer;
`

const RemoveIconButton = styled(RemoveIcon)`
    cursor:pointer;
`

function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const dispatch = useDispatch();

    const handleQuantity = (type) => {
        if(type==="inc"){
            setQuantity(quantity+1)
        }else{
            if(quantity>1){setQuantity(quantity-1)}
        }
    }

    const handleClick = ()=>{
        if(color && size ){
            const tempproductId= new Date().toISOString().toString().replaceAll("-","").replaceAll(":","").replaceAll(".","").replace("Z","");
            dispatch(
                addProduct({
                    ...product,tempproductId,quantity,color,size
                })
            )
        }else{
            alert("Please select size and color")
        }
    }

    useEffect(()=>{
        const fetchproduct = async () =>{
            const res = await axios.get(`/api/products/${productId}`);
            setProduct(res.data);    
        }
        
        fetchproduct();
    },[productId])
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>&#8377; {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((item) => {
                                return <FilterColor key={item} 
                                            tabIndex="-1"
                                            color={item}
                                            onClick ={()=>setColor(item)}
                                            />
                            })}
                        </Filter> 
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize defaultValue={"Size"} onChange ={(e)=>setSize(e.target.value)}>
                                <FilterSizeOption disabled>Size</FilterSizeOption>
                                {product.size?.map((item) => {
                                    return <FilterSizeOption key={item}>{item}</FilterSizeOption>
                                })}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIconButton onClick={()=>handleQuantity("dec")}/> 
                            <Amount>{quantity}</Amount>
                            <AddIconButton onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
