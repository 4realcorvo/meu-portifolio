import styles from "./Conhecimentos.module.css";
import { useState } from "react";

function Conhecimentos() {
  const [name, setName] = useState("start");

  const conhecimentosText = {
    start:
      "Área voltada para minhas skills/conhecimentos no mundo da programação",
    html: "Alguma coisa sobre html",
    css: "Alguma coisa sobre css",
    js: "Alguma coisa sobre js",
    react: "Alguma coisa sobre react",
    git: "Alguma coisa sobre git",
  };

  function handleSetName(newName) {
    setName(newName);
  }

  return (
    <div className={styles.back} id="conhecimento">
      <div className={styles.column1}>
        <div className={styles.divIcons}>
          <div className={styles.icons} onClick={() => handleSetName("html")}>
            <img src="/icons/html.png" />
          </div>
          <div className={styles.icons} onClick={() => handleSetName("css")}>
            <img src="/icons/css.png" />
          </div>
          <div className={styles.icons} onClick={() => handleSetName("js")}>
            <img src="/icons/js.png" />
          </div>
        </div>
        <div className={styles.divIcons2}>
          <div className={styles.icons} onClick={() => handleSetName("react")}>
            <img src="/icons/react.png" />
          </div>
          <div className={styles.icons} onClick={() => handleSetName("git")}>
            <img src="/icons/git.png" />
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.column2}>
        <h1>Conhecimentos</h1>
        <h2>{conhecimentosText[name]} </h2>
      </div>
    </div>
  );
}

export default Conhecimentos;
