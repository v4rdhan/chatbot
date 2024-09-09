import React from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <div>
        <h2 className="d-flex align-items-center justify-content-center">
          Please Register
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
          <TextField
            type="password"
            name="password"
            id="fullWidth"
            label="Confirm Password"
          />

          <Stack
            spacing={2}
            direction="row"
            className="d-flex align-items-center "
          >
            <Button variant="contained" type="Submit">
              Sign Up
            </Button>
            <Button variant="outlined" onClick={() => login()}>
              Sign In
            </Button>
          </Stack>
        </Box>
      </div>
    </>
  );
}
