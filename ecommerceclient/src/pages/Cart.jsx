import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Link} from "react-router-dom";
import { mobile } from '../Responsive'
import { clearCart, removeProduct } from '../redux/cartRedux';



const Container = styled.div`

`

const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})};
`

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`

const TopButton = styled.button`
    padding :10px;
    cursor:pointer;
    font-weight:600;
    border: ${props => props.type ==="filled" && "none"};
    background-color:${props=> props.type === "filled" ? "black" : "transparent" };
    color : ${props => props.type === "filled" && "white"}
`

const TopTexts = styled.div`
    ${mobile({display:"none"})};
`

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})};
`

const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}; 
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width:200px;

    ${mobile({width:"150px"})};
`

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    ${mobile({width:"150px",padding:"0 20px"})};
`

const ProductName = styled.span`
    ${mobile({marginBottom:"10px"})};
`

const ProductId = styled.span`
    ${mobile({marginBottom:"10px"})};
`

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    ${mobile({marginBottom:"10px"})};
`

const ProductSize = styled.span`
    ${mobile({marginBottom:"10px"})};

`

const ProductAmount = styled.span`
    ${mobile({marginBottom:"10px"})};
`

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    ${mobile({marginLeft:"50px",marginTop:"5px",justifyContent:"center"})};
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    ${mobile({marginBottom:"5px"})};
`

// const ProductAmount = styled.span`
//     font-size:24px;
//     margin:5px;
//     ${mobile({margin:"5px 15px",fontSize:"18px"})};
// `

const ProductPrice = styled.span`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:"20px",fontSize:"26px"})};
`

const Remove = styled(TopButton)`
`
const Hr = styled.hr`
    background-color: #eee ;
    border:none;
    height:1px;

`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;

`

const SummaryTitle= styled.h1`
    font-weight:200;
`

const SummaryItem = styled.div`
    margin : 30px 0;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==="total" && "500"};
    font-size:${props=>props.type==="total" && "24"}px;
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    cursor:pointer;
    font-weight:600;
    margin-top:20px;
`

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handlePayment = async()=>{        
        const res = await axios.post("/api/payments",{
            amount:cart.total * 100,
            quantity:1
        })
        dispatch(clearCart());
        window.location = res.data.session.url; 
    }

    const handleRemoveProduct = (removedtotal,quantity,tempproductId) =>{
        dispatch(removeProduct({
            removedtotal,quantity,tempproductId
        }));
    }

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                            <TopButton>CONTINUE SHOPPING</TopButton>
                        </Link>
                        <TopTexts>
                            <TopText>Shopping Bag ({cart.quantity})</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton onClick={handleClearCart} type="filled">CLEAR CART</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map(product => {
                                return (
                                    <div key={product.tempproductId}>
                                        <Product >
                                            <ProductDetail>
                                                <Image src ={product.img}/>
                                                <Details>
                                                    <ProductName><strong>Product:</strong> {product.title}</ProductName>
                                                    <ProductId><strong>ID:</strong> {product.id}</ProductId>
                                                    <ProductColor color={product.color}/>
                                                    <ProductSize><strong>Size:</strong> {product.size}</ProductSize>
                                                    <ProductAmount><strong>Quantity:</strong> {product.quantity}</ProductAmount>
                                                </Details>
                                            </ProductDetail>
                                            <PriceDetail>
                                                {/* <ProductAmountContainer>
                                                    <AddIcon/>
                                                    <ProductAmount>{product.quantity}</ProductAmount>
                                                    <RemoveIcon/>
                                                    <ProductAmount><strong>Quantity:</strong> {product.quantity}</ProductAmount>
                                                </ProductAmountContainer> */}
                                                <ProductPrice>&#8377;{product.price * product.quantity}</ProductPrice>
                                                <Remove onClick={()=>handleRemoveProduct(product.price * product.quantity,
                                                                        product.quantity,
                                                                        product.tempproductId)} 
                                                    type="filled">Remove</Remove>
                                            </PriceDetail>
                                            
                                        </Product>
                                        <Hr/>
                                    </div>
                                )
                            })
                            
                            }
                            
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>&#8377; {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>&#8377; 500</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>-&#8377; 500</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText >Total</SummaryItemText>
                                <SummaryItemPrice>&#8377; {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={handlePayment}>CHECKOUT NOW</Button>   
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer/>    
        </Container>
    )
}

export default Cart
