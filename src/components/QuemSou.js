import styles from "./QuemSou.module.css";

function QuemSou() {
  return (
    <div className={styles.quemSou} id="home">
      <div
        className={styles.Teste}
        style={{ backgroundImage: "url('images/perfil-1.png')" }}
      ></div>
      <div className={styles.Teste2}>
        <h1>QUEM SOU</h1>
        <h2>Olá, sou Ítalo Marcelo</h2>
        <p>
          Tenho 19 anos, sou <span>produtor</span> musical, analista de{" "}
          <span>criptomoedas</span> e desenvolvedor <span>front-end</span>.
          Iniciei meus estudos em front-end no final de 2021,com{" "}
          <span>HTML</span> e <span>CSS</span> básico, mas cada vez mais
          procurodesenvolver minhas habilidades na área.
        </p>
      </div>
    </div>
  );
}

export default QuemSou;
