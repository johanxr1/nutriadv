import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home NutriAdvizer</title>
        <meta name="description" content="Prueba inicial para NutriAdvizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fullBackgroud">
        <Navbar />
        <Sidebar home="active" />
        <div id="contenedor" className="contenedor">
          <main className="card">
            <h1 className="title">
              Prueba{" "}
              <Link href="prueba">
                <a>de primer Link</a>
              </Link>
            </h1>
          </main>
        </div>
      </div>
    </>
  );
}
