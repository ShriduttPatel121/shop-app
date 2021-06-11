import React, { useState } from 'react';
import { Grid, Divider, Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import SortOutlinedIcon from '@material-ui/icons/SortOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';

import ProductCard from '../../components/ProductCard';
import * as productActions from '../../store/action/products';
import * as cartActions from '../../store/action/cart';

const useStyles = makeStyles((theme) => ({
    sorting: {
        marginBottom: theme.spacing(2),
    },

    arrow: {
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(2),
    }
}))
const LandingPage =  (props) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const [sort, setSort] = useState(null);
    const [order, setOrder] = useState(null)

    const products = useSelector(state => state.products.products);

    const addToCart = (productId) => {
        const cartItem = products.find(p => p._id === productId);
        dispatch(cartActions.addToCart(cartItem));
    }

    const nameSortingHandler = () => {
        setSort('name');
        if(order === 'DSC' || order === null) {
            dispatch(productActions.sortNameASC())
            setOrder('ASC');
        } else {
            dispatch(productActions.sortNameDSC());
            setOrder('DSC');
        }
    }

    const priceSortingHandler = () => {
        setSort('price');
        if(order === 'DSC' || order === null) {
            dispatch(productActions.sortPriceASC())
            setOrder('ASC');
        } else {
            dispatch(productActions.sortPriceDSC())
            setOrder('DSC');
        }
    }
    
    
    return(
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <div className={classes.sorting}>
                <Button color="primary" variant="outlined" onClick={nameSortingHandler} startIcon={<SortOutlinedIcon />}>Sort by Name</Button>
                {
                    sort === "name" ? 
                        order === 'DSC' ? <span className={classes.arrow}><ArrowUpwardOutlinedIcon /></span> : <span className={classes.arrow}><ArrowDownwardOutlinedIcon /></span>
                     : null
                }
              </div>
              <div className={classes.sorting}>
                <Button color="primary" variant="outlined" onClick={priceSortingHandler} startIcon={<SortOutlinedIcon />}>Sort by Price</Button>
                {
                    sort === "price" ? 
                        order === 'DSC' ? <span className={classes.arrow}><ArrowUpwardOutlinedIcon /></span> : <span className={classes.arrow}><ArrowDownwardOutlinedIcon /></span>
                     : null
                }
              </div>
              <Divider />
            </Grid>
            { products.map(pro => (
                <Grid item key={pro._id} xs={8} md={8} lg={8} xl={8}>
                    <ProductCard name={pro.name} addToCart={addToCart} id={pro._id} description={pro.description} price={pro.price} isLanding />
                </Grid>
            )) }
        </Grid>
    );
};
export default LandingPage;