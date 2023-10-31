"use client";

import UserFormContainer from "@/common/UserFormContainer";
import loginImage from "@/public/images/nika.jpg";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import "./styles.scss";

const Login: FC = () => {
  return (
    <UserFormContainer image={loginImage} title="Welcome pirate">
      <TextField
        variant="outlined"
        className="login-input"
        label="Email"
        type="email"
        name="email"
        fullWidth
        required
      />
      <TextField
        variant="outlined"
        className="login-input"
        label="Password"
        type="password"
        name="password"
        fullWidth
        required
      />
      <div className="login-actions-btn">
        <Button
          variant="contained"
          color="primary"
          className="material-btn login-btn-save"
          fullWidth
        >
          Login
        </Button>

        <Button
          variant="contained"
          color="inherit"
          className="material-btn login-btn-cancel"
          fullWidth
        >
          <Link className="login-link-cancel" href="/">
            Cancel
          </Link>
        </Button>
      </div>
    </UserFormContainer>
  );
};

export default Login;
