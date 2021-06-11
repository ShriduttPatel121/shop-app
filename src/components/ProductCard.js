import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '700px',
        margin: 'auto',
    }
}));
const ProductCard =  (props) =>{
    const classes = useStyles();

    const { name, addToCart, id, description, price, isLanding, qty } = props;

    const history = useHistory();

    const redirectToCart = () => {
        history.push('/cart');
    }

    return(
        <Card className={classes.root}>
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h5" component="h2" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        ${price}
                    </Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                { isLanding ? (
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Button color="primary" onClick={() => addToCart(id)} startIcon={<AddShoppingCartOutlinedIcon />}>
                            Add to Cart
                        </Button>
                        <Button onClick={redirectToCart}>
                            Go to cart
                        </Button>
                    </Box>
                ) : (
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Typography variant="h6">Quantity: {qty}</Typography>
                    </Box>
                ) }
            </CardActions>
        </Card>
    );
};
export default ProductCard;