import styles from "./Menu.module.css";

export const Menu = () => {
  const scrollFun = (id) => {
    document
      .querySelector(`#${id}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  function tabBar(name) {
    scrollFun(name);
  }

  return (
    <div className={styles.headerMenu}>
      <h1>
        <span>Meu</span> Portifófilo
      </h1>
      <div className={styles.Menu}>
        <p onClick={() => tabBar("home")}>Quem sou</p>
        <p onClick={() => tabBar("conhecimento")}>Conhecimentos</p>
        <p onClick={() => tabBar("projetos")}>Projeto</p>
        <p onClick={() => tabBar("social")}>Redes Sociais</p>
      </div>
    </div>
  );
};
