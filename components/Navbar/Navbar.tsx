import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { Nav, NavLogo, NavAuth, NavMenu, NavList } from "./Navbar.style";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLogo>
        <Image src={Logo} alt="Box Movie" />
      </NavLogo>
      <NavAuth>
        <p>Sign In</p>
        <NavMenu
          onClick={(e) => {
            setIsOpen((e) => !e);
          }}
        >
          <span></span>
          <span></span>
        </NavMenu>
        <NavList isOpen={isOpen}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Search</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
        </NavList>
      </NavAuth>
    </Nav>
  );
};

export default Navbar;
