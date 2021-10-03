import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerBackground}>
        <div className={styles.container}> 
            <div style={{fontSize:'30px'}}>HELSINGIN SANOMAT </div>
            <div>Etusivu </div>
            <div>Uutiset </div>
            <div>Lehdet </div>
            <div>Asiakaspalvelu </div>
            <div>Tilaa </div>
            <div>Kirjaudu </div>
            <div>Valikko =</div>
        </div>    
        </div>
    )
}
