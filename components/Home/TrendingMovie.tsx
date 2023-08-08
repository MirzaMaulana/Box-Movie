import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  font-family: DM Sans;
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: var(--bg-rose);
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;
const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto;
  gap: 3rem;
`;

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  vote_average: number;
}
interface TrendingMovieProps {
  TrendingMovie: MovieProps[];
}
export default function TrendingMovie({ TrendingMovie }: TrendingMovieProps) {
  return (
    <Wrapper>
      <h1>
        Trending Movie
        <span>See more </span>
      </h1>
      <Grid>
        {TrendingMovie.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            media_type={movie.media_type}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}
