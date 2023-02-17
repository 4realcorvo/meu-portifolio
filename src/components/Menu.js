import styles from './Menu.module.css'

function header(){
    return(
        <div>
            <div className={styles.headerMenu}>
                <h1><span>Meu</span> Portifófilo</h1>
                <div className={styles.Menu}>
                    <a href='#'>Quem sou</a>
                    <a href='#'>Conhecimentos</a>
                    <a href='#'>Projeto</a>
                    <a href='#'>Redes Sociais</a>
                </div>
            </div>
        </div>
    )
}

export default header