import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import About from "./About";
export default function Home() {
  return (
    <div>
      <Head>
        <title>CengizTUTA</title>
      </Head>
      <Sidebar></Sidebar>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Hi, my name is</p>
          <h1>Cengiz TUTA</h1>
          <h2> I create visually pleasing interfaces for the web.</h2>
          <h4>
            I'm a passionate Front-End web developer having an experience of web
            applications with React.js & Next.js with TypeScript & TailwindCSS
            and UI/UX designing.
          </h4>
        </div>
      </div>
      <About />
    </div>
  );
}
