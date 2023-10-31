import Image from "next/image";
import { FC } from "react";
import onePieceLogo from "@/public/logo/one-piece-logo.png";
import "./styles.scss";
import { Button } from "@mui/material";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu">
        <Image alt="one-piece-logo" src={onePieceLogo} height={60} width={60} />
      </div>
      <div className="navbar-actions">
        <Link href="/login">
          <Button variant="contained" className="signIn-btn">
            Sign In
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="contained" className="signUp-btn">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
