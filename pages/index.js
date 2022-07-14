import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Pornstar from "../components/Pornstar";

export default function Home() {
  const [data, setData] = useState();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "papi-pornstarsapi.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getData = async () => {
      fetch(`https://papi-pornstarsapi.p.rapidapi.com/pornstars/`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
     
    };
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Know your favourite Pornstar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/main.jpg" />
      </Head>
      {data ? (
        <>
          <Header />
          <Pornstar pornstars={data.results} next={data.next}/>
        </>
      ): <Loading/>
     }
    </div>
  );
}