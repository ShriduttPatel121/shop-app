import React from "react";
import { AppBar, Toolbar, Typography, Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavLinks from "./NavLinks";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
      },
    cartBtn: {
      marginLeft: theme.spacing(3)
    }
}));
const MainNavigation = (props) => {

    const classes = useStyles();
    const totalCartItems = useSelector(state => state.cart.totalItems);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
          <span>
            <NavLinks orientation="horizontal" />
          </span>
          <Button className={classes.cartBtn} variant="outlined" color="secondary" startIcon={<ShoppingCartOutlinedIcon />} component={NavLink} to="/cart" endIcon={<Chip size="small" label={totalCartItems}></Chip>}>
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default MainNavigation;
