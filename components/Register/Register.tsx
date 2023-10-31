"use client";

import registerImage from "@/public/images/nika.jpg";
import onePieceLogo from "@/public/logo/one-piece-logo.png";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { ChangeEventHandler, FC, useMemo, useState } from "react";
import "./styles.scss";
import { debounce } from "lodash";
import * as Yup from "yup";
import Link from "next/link";
import UserFormContainer from "@/common/UserFormContainer";

interface IRegistration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_REGISTRATION: IRegistration = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const schemaValidator = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Register: FC = () => {
  const [registration, setRegistration] =
    useState<IRegistration>(INITIAL_REGISTRATION);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setRegistration((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const debounceHandleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = debounce((e) => handleChange(e), 300);

  const isValid = useMemo(
    async () => await schemaValidator.validate(registration),
    [registration],
  );

  const handleSubmit = () => {
    schemaValidator.validate(registration).catch((e) => console.log(e.errors));
  };

  return (
    <UserFormContainer image={registerImage} title="Welcome pirate!">
      <TextField
        variant="outlined"
        className="register-input"
        label="Username"
        type="text"
        name="username"
        onChange={debounceHandleChange}
        fullWidth
        required
      />
      <TextField
        variant="outlined"
        className="register-input"
        label="Email"
        type="email"
        name="email"
        onChange={debounceHandleChange}
        fullWidth
        required
      />
      <TextField
        variant="outlined"
        className="register-input"
        label="Password"
        type="password"
        name="password"
        onChange={debounceHandleChange}
        fullWidth
        required
      />
      <TextField
        variant="outlined"
        className="register-input"
        label="Confirm password"
        type="password"
        name="confirmPassword"
        onChange={debounceHandleChange}
        fullWidth
        required
      />
      <div className="register-actions-btn">
        <Button
          variant="contained"
          color="primary"
          className="material-btn register-btn-save"
          onClick={handleSubmit}
          fullWidth
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          color="inherit"
          className="material-btn register-btn-cancel"
          fullWidth
        >
          <Link className="register-link-cancel" href="/">
            Cancel
          </Link>
        </Button>
      </div>
    </UserFormContainer>
  );
};

export default Register;
