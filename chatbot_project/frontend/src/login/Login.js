import React from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({ username, password }),
      credentials: "include", // This ensures the session cookie is stored
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Navigate to home/dashboard after login
          navigate("/chatbot");
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
        <h2 className="d-flex align-items-center justify-content-center  w-50 ms-5">
          Hey! Please Sign In to access the ChatBot
        </h2>
        <Box
          onSubmit={handleSignIn}
          className="d-flex flex-column align-items-center justify-content-center"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
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

          <Stack
            spacing={2}
            direction="row"
            className="d-flex align-items-center "
          >
            <Button variant="contained" type="Submit" onClick={handleSignIn}>
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
