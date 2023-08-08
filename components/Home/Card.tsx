import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 250px;
  height: 490px;
  p {
    font-family: DM Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
  }
`;
const Media = styled.span`
  position: absolute;
  font-family: DM Sans;
  text-transform: uppercase;
  padding: 4px 10px;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  margin-left: 0.3rem;
  border-radius: 5px;
  color: white;
  background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(4px);
`;
interface CardProps {
  title: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  vote_average: number;
}

export default function Card({
  title,
  poster_path,
  media_type,
  release_date,
  vote_average,
}: CardProps) {
  return (
    <Container>
      <Media>{media_type}</Media>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        height={370}
        width={250}
      />
      <small>{release_date}</small>
      <p>{title}</p>
      <small>
        <span>TMDb</span> {vote_average} / 10
      </small>
    </Container>
  );
}
