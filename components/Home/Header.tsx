import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

interface ContainerProps {
  background: string;
}
const Container = styled.div<ContainerProps>`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background});
  background-size: cover;
  height: 100vh;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 30px auto;
  display: flex;
  align-items: center;
`;

const DescriptionBox = styled.div`
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
interface TvProps {
  backdrop_path: string;
  name: string;
  overview: string;
  vote_average: number;
}
interface trendingTvProps {
  trendingTv: TvProps[];
}

export default function Header({ trendingTv }: trendingTvProps) {
  const firstTrendingTV = trendingTv[6];
  return (
    <Container
      background={`https://image.tmdb.org/t/p/original${firstTrendingTV.backdrop_path}`}
    >
      <Navbar />
      <Wrapper>
        <DescriptionBox>
          <h1>{firstTrendingTV.name}</h1>
          <p>
            <span>TMDb</span>
            {firstTrendingTV.vote_average} / 10
          </p>
          <p>{firstTrendingTV.overview}</p>
          <button>
            <i className="bi bi-play-circle-fill"></i> Watch trailer
          </button>
        </DescriptionBox>
      </Wrapper>
    </Container>
  );
}
