import React from 'react'
import styles from './MainNews.module.css';
export default function MainNews(props) {
    return (
        <div className={styles.newsBackground}>
            <span className={styles.newsHeader}> {props.category}: </span> {props.title}
        </div>
    )
}
