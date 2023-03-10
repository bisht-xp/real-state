import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ViewProperty from "@/components/ViewProperty";
import { Properties } from "../dummydata";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />
        {<ViewProperty properties={Properties} />}
      </div>
    </>
  );
}
