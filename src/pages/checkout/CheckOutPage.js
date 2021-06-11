import React from 'react';
import { Grid, Divider, Button, Typography, Box  } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from '../../components/ProductCard';
import { clearCart } from '../../store/action/cart';

const CheckOutPage =  (props) =>{

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const checkOutHandler = () => {
        console.log(cartItems);
        console.log(totalPrice);
        dispatch(clearCart());
    }
    return(
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <Box display="flex" justifyContent="space-between" marginBottom="1rem">
                    <Button onClick={checkOutHandler} variant="contained" color="primary" disabled={cartItems.length === 0}>checkout</Button>
                    <Typography variant="h5" component="h6">Total amount: ${totalPrice}</Typography>
                </Box>
                <Divider />
            </Grid>
            {
                cartItems.map(c => (
                    <Grid item xs={12} md={12} lg={12} xl={12} key={c.item._id}>
                        <ProductCard name={c.item.name} price={c.item.price} qty={c.qty} description={c.item.description}/>
                    </Grid>
                ))
            }
            {
                cartItems.length === 0 ? <Grid item xs={12} md={12} lg={12} xl={12} ><Typography variant="h6">Please add a product to the cart.</Typography></Grid> : null
            }
        </Grid>
    );
};
export default CheckOutPage;