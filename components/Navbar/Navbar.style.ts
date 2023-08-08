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

interface NavListProps {
  isOpen: boolean;
}
const NavList = styled.ul<NavListProps>`
  list-style: none;
  display: ${(props) => (props.isOpen === true ? "flex" : "none")};
  position: absolute;
  align-items: center;

  flex-direction: column;
  padding: 1.5rem 3rem;
  background-color: white;
  right: 4rem;
  top: 3rem;
  font-weight: semibold;
  font-family: DM Sans;
  font-size: 1rem;
  gap: 5px;
  border-radius: 0.5rem;
  li {
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export { Nav, NavAuth, NavLogo, NavSearch, NavMenu, NavList };
