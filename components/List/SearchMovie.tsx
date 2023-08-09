import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Container = styled.div`
  width: 1200px;
  margin: 70px auto;
  h2 {
    font-family: DM Sans;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ButtonSearch = styled.button`
  border: none;
  padding: 5px 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--bg-rose);
  color: white;
  &:active {
    background-color: red;
  }
`;
const InputSearch = styled.input`
  width: 24rem;
  border-radius: 5px;
  border: none;
  background-color: #d1d5db;
  font-family: DM Sans;
  padding: 5px 10px;
  outline: 0;
`;
const Grid = styled.div`
  margin-top: 90px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(180px, 0fr));
  gap: 2rem;
`;

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  vote_average: number;
}
export default function SearhMovie() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState<MovieProps[]>([]);

  useEffect(() => {
    fetchData();
  }, [query]);

  const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
  const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = async () => {
    try {
      const response = await axios(
        `${ApiUrl}/search/movie?api_key=${ApiKey}&query=${query}`
      );
      const data = response.data.results;
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2>What do you want to watch?</h2>
      <Wrapper>
        <InputSearch
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search Movie.."
        />
        <ButtonSearch onClick={fetchData}>
          <i className="bi bi-search"></i>
        </ButtonSearch>
      </Wrapper>
      <Grid>
        {movie.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            media_type={item.media_type}
            release_date={item.release_date}
            vote_average={item.vote_average}
          />
        ))}
      </Grid>
    </Container>
  );
}
