import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../Responsive';
import { logout } from '../redux/apiCalls';


const Container = styled.div`
    height : 60px;
    ${mobile({height:"50px"})};
   
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({padding:"10px 0px"})};
`

const Left = styled.div`
    flex:1;    
    display:flex;
    align-items:center;
`

// const Language = styled.span`
//     font-size:14px;
//     cursor:pointer;
//     ${mobile({display:"none"})};
// `
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})};

    :focus{
        outline:none;
    }
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "24px" ,display:"flex",justifyContent:"flex-end"})};
    cursor: pointer;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex:2,marginRight:"20px"})};
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px",marginLeft:"10px" })} ;
`

function Navbar() {
    const user = useSelector(state=>state.user.currentUser.username);
    const quantity = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch();

    const handleLogout = () => {
        logout(dispatch);
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language> */}
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color:"gray",fontSize:16}}/>
                    </SearchContainer>     
                </Left>
                <Center>
                    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                        <Logo>JJ.</Logo>
                    </Link>
                </Center>
                <Right>
                    {user 
                    ?   <>
                            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                                <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
                            </Link>
                        </>
                    :
                        <>
                            <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>
                    }
                    

                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
