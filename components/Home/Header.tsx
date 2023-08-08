import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Background from "@/assets/images/Background.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Container = styled.div`
  width: 100vw;
  background-image: url(${Background.src});
  background-size: cover;
  height: 100vh;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 92px auto;
`;
const DescriptionBox = styled.h1`
  width: 404px;
  height: 285px;
  font-family: DM Sans;
  color: #fff;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 56px;
  }
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 18px;
    span {
      font-weight: 800;
      color: black;
      padding: 3px 5px;
      border-radius: 2px;
      background-color: yellow;
    }
  }
  button {
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    background-color: var(--bg-rose);
    border: none;
    border-radius: 5px;
    display: flex;
    padding: 8px 20px;
    align-items: center;
    color: white;
    gap: 5px;
    text-transform: uppercase;
  }
`;

export default function Header() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <DescriptionBox>
          <h1>John Wick 3 : Parabellum</h1>
          <p>
            <span>TMDb</span>86.0 / 10
          </p>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button>
            <i className="bi bi-play-circle-fill"></i> Watch trailer
          </button>
        </DescriptionBox>
      </Wrapper>
    </Container>
  );
}
