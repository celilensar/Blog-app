import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Auth = () => {
  const [IsSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={10}
          paddingY={5}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {IsSignup ? "Signup" : "Login"}
          </Typography>
          {IsSignup && (
            <TextField value={inputs.name} placeholder="Name" margin="normal" />
          )}
          <TextField
            value={inputs.email}
            type="email"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            value={inputs.password}
            type="password"
            placeholder="Password"
            margin="normal"
          />
          <Button
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            {" "}
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!IsSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            {" "}
            Change to {IsSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
