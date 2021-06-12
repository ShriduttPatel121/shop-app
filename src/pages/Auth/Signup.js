import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Card,
  Typography,
  Container,
  Button,
  Divider,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory, NavLink } from "react-router-dom";

import TextInput from "../../shared/components/Input/TextInput";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    width: "70%",
    padding: "0.5rem",
    flexWrap: "wrap",
    height: "100%",
    "@media(max-width : 52rem)": {
      width: "80%",
    },
  },
  formContainer: {
    padding: "2rem 1rem",
    textAlign: "center",
    width: "25rem",
  },

  sybmitBtn: {
    marginTop: "1rem",
  },
});

const initialValues = {
  email: "",
  password: "",
  cnfPassword: ""
};

const validation = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(5, "min 5 characters or more"),
    cnfPassword: Yup.string()
      .required("This field is required.")
      .oneOf([Yup.ref("password"), null], "Should match with above field"),
});

const Signup = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [cnfPasswordVisibility, setCnfPasswordVisibility] = useState("password");

  const setVisibility = (type) => {
    if (type === "text") {
      return "password";
    } else {
      return "text";
    }
  };

  const passwordVisibilityHandler = () => {
    setPasswordVisibility((preState) => setVisibility(preState));
  };

  const cnfPasswordVisibilityHandler = () => {
    setCnfPasswordVisibility((preState) => setVisibility(preState));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(value, { setSubmitting, resetForm }) => {
        console.log(value);
        resetForm();
        history.push("/login");
      }}
    >
      {(props) => (
        <Container className={classes.root} maxWidth="md">
          <Card className={classes.formContainer}>
            <Typography component="h1" variant="h4">
              Login
            </Typography>
            <Divider style={{ margin: "1rem 0" }} />
            <form onSubmit={props.handleSubmit}>
              <TextInput type="email" name="email" label="Email" />
              <TextInput
                type={passwordVisibility}
                name="password"
                visibilityicon="true"
                visiblilitytoggler={passwordVisibilityHandler}
                label="Password"
              />
              <TextInput
                type={cnfPasswordVisibility}
                name="cnfPassword"
                visibilityicon="true"
                visiblilitytoggler={cnfPasswordVisibilityHandler}
                label="Confirm password"
              />
              <Box display="flex" flexDirection="column">
              <Button
                type="submit"
                size="large"
                variant="contained"
                disabled={!props.isValid || props.isSubmitting}
                color="primary"
                className={classes.sybmitBtn}
              >
                Signup
              </Button>
              <Button
                type="button"
                size="large"
                color="primary"
                variant="outlined"
                style={{ marginTop: "1rem" }}
                to="/login"
                component={NavLink}
              >
                Switch mode to Login
              </Button>
              </Box>
            </form>
          </Card>
        </Container>
      )}
    </Formik>
  );
};
export default React.memo(Signup);
