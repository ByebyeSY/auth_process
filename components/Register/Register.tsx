'use client'

import { FC } from "react";
import './styles.scss'
import { Button, TextField, useMediaQuery } from "@mui/material";
import onePieceLogo from '@/public/logo/one-piece-logo.png'
import Image from "next/image";
import registerImage from "@/public/images/nika.jpg"

const Register: FC = () => {

    const matches = useMediaQuery('(min-width:1024px)');

    return <div className="register-container">
        <div className="register-content">
            <div className="register-content-left">
                <Image alt="register-image" className="register-image" src={registerImage} fill={true} />
            </div>
            <div className="register-content-right">
                <Image alt="register-logo" src={onePieceLogo} width={180} height={180} />

                <h1>Welcome pirate</h1>

                {/* <span className="subtitle">Register here</span> */}

                <div className="register-form">

                    <TextField variant="outlined" className="register-input" label="Username" type="text" fullWidth required />
                    <TextField variant="outlined" className="register-input" label="Email" type="email" fullWidth required />
                    <TextField variant="outlined" className="register-input" label="Password" type="password" fullWidth required />

                    <div className="register-actions-btn">
                        <Button variant="contained" color="primary" className="material-btn register-btn-save" fullWidth>Save</Button>
                        <Button variant="contained" color="inherit" className="material-btn register-btn-cancel" fullWidth>Cancel</Button>
                    </div>

                </div>
            </div>

        </div>
    </div>
}

export default Register