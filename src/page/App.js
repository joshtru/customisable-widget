import React from "react";
import styles from "./App.module.css";
import Data from "../data/data2";
import GetComponent from "../components/GetComponent/GetComponent";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary.component.jsx";

const App = () => {
  return (
    <ErrorBoundary>
      <main className={styles.App}>
        {Data ? <GetComponent data={Data} /> : <div>No Data Provided</div>}
      </main>
    </ErrorBoundary>
  );
};

export default App;
