import Image from "next/image";
import logo from "../../../public/logo.svg";

const Logo = () => {
  return <Image className="logo" src={logo} alt="One Pillow Logo" />;
};

export default Logo;
