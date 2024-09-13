import React, { useState } from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({
        username,
        password,
        password2,
        email,
        first_name,
        last_name,
      }),
      credentials: "include", // This ensures the session cookie is stored
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Navigate to home/dashboard after login
          navigate("/login");
        } else if (data.error) {
          setError(data.error);
        }
      });
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  return (
    <>
      <div className="d-flex vh-100">
        <h2 className="d-flex align-items-center justify-content-center w-50 ms-5">
          Hey! Please Register to use the ChatBot
        </h2>
        <Box
          className="d-flex flex-column align-items-center justify-content-center"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
          onSubmit={handleSignUp}
        >
          {/* <label>Username or Email</label> */}

          <TextField
            type="text"
            name="username"
            id="fullWidth"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            name="password"
            id="fullWidth"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            type="password"
            name="password"
            id="fullWidth"
            label="Confirm Password"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <TextField
            type="text"
            name="email"
            id="fullWidth"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="text"
            name="firstName"
            id="fullWidth"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            type="text"
            name="lastName"
            id="fullWidth"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <Stack
            spacing={2}
            direction="row"
            className="d-flex align-items-center "
          >
            <Button variant="contained" type="Submit" onClick={handleSignUp}>
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
