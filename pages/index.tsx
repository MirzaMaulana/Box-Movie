import Header from "@/components/Home/Header";
import SearchMovie from "@/components/Home/SearchMovie";
import Head from "next/head";
import axios from "axios";

export default function Home({ trendingMovie }: { trendingMovie: [] }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header />
        <SearchMovie TrendingMovie={trendingMovie} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const ApiKey = process.env.API_KEY;
    const ApiUrl = process.env.API_URL;
    const response = await axios(
      `${ApiUrl}/trending/all/week?api_key=${ApiKey}`
    );
    const data = await response.data.results;

    return {
      props: {
        trendingMovie: data,
      },
    };
  } catch (error: any) {
    console.log(error);
  }
};
