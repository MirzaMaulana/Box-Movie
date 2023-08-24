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

export async function getStaticProps() {
  try {
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(
      `${ApiUrl}/trending/movie/week?api_key=${ApiKey}`
    );
    const response2 = await axios.get(
      `${ApiUrl}/trending/tv/week?api_key=${ApiKey}`
    );
    const data = response.data.results;
    const data2 = response2.data.results;

    return {
      props: {
        trendingMovie: data,
        trendingTv: data2,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        trendingMovie: [],
        trendingTv: [],
      },
    };
  }
}
