import Image from "next/image";
import { FC } from "react";
import onePieceLogo from '@/public/logo/one-piece-logo.png';
import './styles.scss';

const Navbar: FC = () => {
    return <div className="navbar-container">
        <Image alt='one-piece-logo' src={onePieceLogo} height={60} width={60} /> 
    </div>
}

export default Navbar