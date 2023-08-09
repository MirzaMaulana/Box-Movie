import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const Container = styled.div`
  background-color: #111827;
`;
export default function Header() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}
