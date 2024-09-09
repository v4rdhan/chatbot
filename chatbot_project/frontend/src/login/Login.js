import React from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div>
        <h2 className="d-flex align-items-center justify-content-center">
          Please Login or Sign in
        </h2>
        <Box
          className="d-flex flex-column align-items-center justify-content-center"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
        >
          {/* <label>Username or Email</label> */}
          <TextField
            type="text"
            name="username"
            id="fullWidth"
            label="Username or Email"
          />
          <TextField
            type="password"
            name="password"
            id="fullWidth"
            label="Password"
          />

          <Stack
            spacing={2}
            direction="row"
            className="d-flex align-items-center "
          >
            <Button variant="contained" type="Submit">
              Sign In
            </Button>
            <Button variant="outlined" onClick={() => signup()}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </div>
    </>
  );
}
