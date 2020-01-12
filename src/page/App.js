import React from "react";
import styles from "./App.module.css";
import Data from "../data/data2";
import GetComponent from "../components/GetComponent/GetComponent";

const App = () => {
  return (
    <main className={styles.App}>
      <GetComponent data={Data} />
    </main>
  );
};

export default App;
