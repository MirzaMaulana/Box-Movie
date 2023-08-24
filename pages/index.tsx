import Header from "@/components/Home/Header";
import TrendingMovie from "@/components/Home/TrendingMovie";
import Head from "next/head";
import axios from "axios";

export default function Home({
  trendingMovie,
  trendingTv,
}: {
  trendingMovie: [];
  trendingTv: [];
}) {
  return (
    <div>
      <Head>
        <title>Box Movie</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header trendingTv={trendingTv} data-testid="header-component" />
        <TrendingMovie
          TrendingMovie={trendingMovie.slice(0, 8)}
          data-testid="trending-movie-component"
        />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b729729cec45754865055897b4e2411e`
    );
    const response2 = await axios(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=b729729cec45754865055897b4e2411e`
    );
    const data = await response.data.results;
    const data2 = await response2.data.results;
    return {
      props: {
        trendingMovie: data,
        trendingTv: data2,
      },
    };
  } catch (error: any) {
    console.log(error);
  }
};
