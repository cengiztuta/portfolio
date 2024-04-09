import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import About from "./About";
import WhatIdo from "./WhatIdo";
import Experience from "./Experience";
import Projects from "./Projects";
import MySelf from "./MySelf";
export default function Home() {
  return (
    <div>
      <Head>
        <title>CengizTUTA</title>
      </Head>
      <MySelf />
      <About />
      <WhatIdo />
      <Experience />
      <Projects /> <Sidebar />
    </div>
  );
}
