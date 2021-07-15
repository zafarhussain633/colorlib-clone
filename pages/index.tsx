import Head from "next/head";
import Mainpage from "../components/mainpage/mainpage";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <main>
        <Mainpage />
      </main>
    </div>
  );
}
