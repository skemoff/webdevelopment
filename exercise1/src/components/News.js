import React from 'react'
import styles from './News.module.css';
import mainImage from '../oikeus.jpg';
import subImage from '../wiskari.jpg';
export default function News() {
    return (
        <div className = {styles.newsBox}>
            <span className={styles.newsTitle}>Politiikka</span>
            <tr/>
            <img className={styles.newsMainImage} src={mainImage} alt={'Loiri'}/>
            <tr/>
            <span className={styles.subTitle}>Poliisi | </span>
            <span className={styles.subNews}>Mökkitien sotarikoksista tuomittu Arttu Wiskari söi yläkerran jätkät oikeudessa maanantaina</span>
            <tr/>
            <img className={styles.newsSubImage} src={subImage} alt={'Loiri'}/>

        </div>
    )
}
