import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function FirstPost() {
  return (
    <>
      <Navbar />
      <Sidebar agenda="active" />
      <main className={styles.main}>
        <h1 className={styles.title}>Primer post de prueba</h1>
        <h2>
          <Link href="/">
            <a>Volver a home</a>
          </Link>
        </h2>
      </main>
    </>
  );
}
