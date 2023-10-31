import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import onePieceLogo from "@/public/logo/one-piece-logo.png";
import "./styles.scss";

interface ComponentProps {
  image: StaticImageData;
  title: string;
  children: ReactNode;
}

const UserFormContainer: FC<ComponentProps> = ({ image, title, children }) => {
  return (
    <div className="user-form-container">
      <div className="user-form-content">
        <div className="user-form-content-left">
          <Image
            alt="user-form-image"
            className="user-form-image"
            src={image}
            fill={true}
          />
        </div>
        <div className="user-form-content-right">
          <Image
            alt="user-form-logo"
            src={onePieceLogo}
            width={160}
            height={160}
          />

          <h1>{title}</h1>

          <div className="user-form-children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserFormContainer;
