import type { NextPage } from "next";
import React, { useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

const Home: NextPage = () => {
  const [images, setImages] = React.useState(null) as any;
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [description, setDescription] = React.useState<string | null>(null);
  const fetchGeneratedArt = async (desc: string) => {
    console.log("Generating....");
    setLoading(true);
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //url: profileUrl,
          description: desc,
        }),
      }).then((res) => res.json());
      console.log(res);
      setImages(res.image);
    } catch (err: any) {
      console.log(err);
    } finally {
      console.log("Generated!");
      setLoading(false);
    }
  };

  const handleGenerateArt = () => {
    if (!description) return;
    fetchGeneratedArt(description);
  };

  useEffect(() => {
    // fetchGeneratedImage();
  }, []);

  const hanldeInputChange = useCallback(
    (e: any) => {
      setDescription(e.target.value);
    },
    [description]
  );

  console.log(description);

  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full min-h-[50vh] bg-header relative flex flex-row items-center justify-evenly">
        <div className="flex items-center h-full">
          <div className="flex-1 space-y-14 px-5">
            <div className="font-black text-3xl text-center text-white">
              CREATE YOUR DIGITAL ART
            </div>
            <div className="w-full h-12 bg-white rounded-full p-1 outline outline-offset-8 outline-[2px] outline-white/10 flex flex-row justify-between items-center pl-5">
              <input
                type="text"
                placeholder="Dog in mars"
                className="outline-none flex-1 pr-3"
                onChange={hanldeInputChange}
              />
              <button
                disabled={isLoading || !description}
                onClick={handleGenerateArt}
                className="h-full w-24 px-3 bg-[#111526] rounded-full flex justify-center items-center cursor-pointer transition hover:shadow-lg"
              >
                <span className="text-white">
                  {isLoading ? "Loading..." : "Generate"}
                </span>
              </button>
            </div>
          </div>
        </div>
        {images && (
          <div className="bg-gray-100 rounded-lg w-[29rem] h-[29rem] transform translate-y-44 relative">
            <Image src={images.url} alt="Art" fill className="rounded-md" />
            <div className="absolute w-full h-full -z-10 blur-2xl opacity-70">
              <Image src={images.url} alt="Art" fill />
            </div>
          </div>
        )}
      </header>
      <main className="mx-auto container mt-10">
        <h1 className="font-bold text-gray-800 text-2xl">Recent Arts</h1>
      </main>
    </div>
  );
};

export default Home;
