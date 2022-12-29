import Head from "next/head";
import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { Sidebar, Feed, Modal, Widgets } from "../components";
import { modalState } from "../atoms/modalAtom";
import trendingResults from "../data/trendingResults.json";
import followResults from "../data/followResults.json";

export default function Home({ trendingResults, followResults }: any) {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/signin");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV", {}).then(
  //   (res) => res.json()
  // );
  // const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
  //   (res) => res.json()
  // );

  const session = await getSession(context);
  return {
    props: {
      trendingResults,
      followResults,
      session,
    },
  };
};
