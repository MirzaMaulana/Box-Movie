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
        <Header trendingTv={trendingTv} />
        <TrendingMovie TrendingMovie={trendingMovie.slice(0, 8)} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const ApiKey = process.env.API_KEY;
    const ApiUrl = process.env.API_URL;
    const response = await axios(
      `${ApiUrl}/trending/movie/week?api_key=${ApiKey}`
    );
    const response2 = await axios(`${ApiUrl}/tv/top_rated?api_key=${ApiKey}`);
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
