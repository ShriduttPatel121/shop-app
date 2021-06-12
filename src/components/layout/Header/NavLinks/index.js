import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../../../store/action/user";

const useStyles = makeStyles({
  root: {
    "& .MuiTabs-flexContainer": {
      height: "64px",
      display: "none",
      "@media(min-width : 600px)": {
        display: "flex",
      },
    },
  },
});

const NavLinks = (props) => {
  const classes = useStyles();

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const [tabValue, setTabValue] = useState(0);

  const isAuth = useSelector((state) => state.user.isGuest);

  // to set the active tab
  useEffect(() => {
    if (pathname.includes("cart")) {
      setTabValue(0);
    } else {
      setTabValue(pathname);
    }
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const logouthandler = () => {
    dispatch(logoutUser());
    history.replace("/login");
  };

  return (
    <>
      <Tabs value={tabValue} onChange={handleChange} className={classes.root}>
        <Tab
          label="Products"
          value="/products"
          to="/products"
          exact
          component={NavLink}
        />
        <Tab
          style={{ display: !isAuth ? "none" : "flex" }}
          label="Register"
          value="/signup"
          to="/signup"
          exact
          component={NavLink}
        />
        <Tab
          style={{ display: !isAuth ? "none" : "flex" }}
          label="Authenticate"
          value="/login"
          to="/login"
          exact
          component={NavLink}
        />
        <Tab
          label="Logout"
          style={{ display: isAuth ? "none" : "flex" }}
          onClick={logouthandler}
        />
        <Tab style={{ display: "none" }} value={0} />
      </Tabs>
    </>
  );
};
export default NavLinks;
