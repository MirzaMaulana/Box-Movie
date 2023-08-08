import styled from "styled-components";
import Search from "@/assets/images/Search.svg";

const Nav = styled.nav`
  width: 1200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const NavLogo = styled.div`
  display: flex;
`;

const NavSearch = styled.input`
  display: flex;
  width: 450px;
  color: white;
  padding: 6px 10px;
  font-size: 1rem;
  font-family: DM Sans;
  background-image: url(${Search.src});
  background-position: right 10px center;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  outline: none;
  border: 2px solid white;
`;

const NavAuth = styled.div`
  color: white;
  display: flex;
  align-items: center;
  p {
    font-family: DM Sans;
    margin-right: 1rem;
  }
`;

const NavMenu = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-rose);
  border-radius: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  span {
    padding: 2px 10px;
    margin: 2px 0px;
    border-radius: 20%;
    background-color: white;
  }
`;

export { Nav, NavAuth, NavLogo, NavSearch, NavMenu };
