import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { Nav, NavLogo, NavAuth, NavMenu } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>
        <Image src={Logo} alt="Box Movie" />
      </NavLogo>
      <NavAuth>
        <p>Sign In</p>
        <NavMenu>
          <span></span>
          <span></span>
        </NavMenu>
      </NavAuth>
    </Nav>
  );
};

export default Navbar;
