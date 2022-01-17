import React ,{useEffect,useState} from 'react'
import axios from "axios";
import styled from 'styled-components'

import Product from './Product'

const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap; 
    justify-content:space-between;
`

function Products({cat,sort,filters}) {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `/api/products?category=${cat}` : "/api/products");
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[cat]);

    useEffect(()=>{
        cat && setFilteredProducts(
            products.filter((item) => 
                Object.entries(filters).every(([key,value])=>
                    item[key].includes(value)
                )
            )
        )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);

    return (
        <Container>
            {
                cat 
                ? filteredProducts.map(item=>{
                    return <Product item={item} key={item.id}></Product>
                    })
                : products.slice(0,8).map(item=>{
                return <Product item={item} key={item.id}></Product>
            })
            }
        </Container>
    )
}

export default Products
