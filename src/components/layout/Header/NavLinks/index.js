import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root : {
        '& .MuiTabs-flexContainer' : {
            height : '64px',
            display : 'none',
            '@media(min-width : 600px)' : {
                display : 'flex'
            }
        }
    },
});

const NavLinks =  (props) =>{
    const classes = useStyles();

    const { pathname } = useLocation();

    const [tabValue, setTabValue] = useState(null);

      // to set the active tab
      useEffect(() => {
          if (pathname.includes('cart')) {
              setTabValue(0)
          } else {
              setTabValue(pathname);
          }
      }, [pathname]);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
      };

    return(
        <>
            <Tabs value={tabValue} onChange={handleChange} className={classes.root}>
                <Tab label="Products" value="/products" to="/products" exact component={NavLink}/>
                <Tab label="Register" value="/signup" to="/signup" exact component={NavLink}/>
                <Tab label="Authenticate" value="/login" to="/login" exact component={NavLink}/>
                <Tab style={{ display: 'none' }} value={0}/>
            </Tabs>
        </>
    );
};
export default NavLinks;