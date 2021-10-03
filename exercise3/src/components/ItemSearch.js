import React from 'react';
import styles from './ItemSearch.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.item }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.vendor }>{props.vendor } <span className={styles.itemName}> { props.name }</span></div>
          <div className={styles.price}>{ props.price }€</div>
        </div>
    </div>
  )
}
