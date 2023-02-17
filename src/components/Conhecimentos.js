import styles from './Conhecimentos.module.css';
import {useState} from 'react';


function Conhecimentos(){
    
    function Clique(){
        
        const [name, setName] = useState('oi');
        setName('novo valor')

    }

    return(
        <div className={styles.back}>
            <div className={styles.column1}>
                <div className={styles.divIcons}>
                    <div className={styles.icons} onClick= {Clique}>
                        < img src='/icons/html.png'/>
                    </div>
                    <div className={styles.icons}>
                        < img src='/icons/css.png'/>
                    </div>
                    <div className={styles.icons}>
                        < img src='/icons/js.png'/>
                    </div>
                </div>
                <div className={styles.divIcons2}>
                    <div className={styles.icons}>
                            < img src='/icons/react.png'/>
                        </div>
                        <div className={styles.icons}>
                            < img src='/icons/git.png'/>
                        </div>
                    <div>
                </div>
            </div>
            </div>
            <div className={styles.column2}>
                <h1>Conhecimentos</h1>
                <h2>Área voltada para minhas skills/conhecimentos no mundo da programção</h2>
            </div>
        </div>
    )
}

export default Conhecimentos