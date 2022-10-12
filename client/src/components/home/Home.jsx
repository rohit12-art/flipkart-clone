import { Box , styled } from '@mui/material'
import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch , useSelector } from 'react-redux'
import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
   padding:10px;
   background: #F2F2F2;

`

const Home = () => {
  
  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getProducts())
  }, [dispatch])

  return (
    <>
       <NavBar />
       <Component>
       <Banner />
       <MidSlide products={products} title="Deal of the Day" timer={true} />
       <MidSection />
       <Slide products={products} title="Discounts for You" timer={false}  />
       <Slide products={products} title="Suggesting Item" timer={false}   />
       <Slide products={products} title="Top Selection" timer={false}   />
       <Slide products={products} title="Recommended Item" timer={false}   />
       <Slide products={products} title="Trending Offers" timer={false}   />
       <Slide products={products} title="Season's top picks" timer={false}   />
       <Slide products={products} title="Top Deals on Accessories" timer={false}   />
       </Component>
    </>
  )
}

export default Home