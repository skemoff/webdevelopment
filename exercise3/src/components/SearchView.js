import React from 'react';
import styles from './SearchView.module.css';
import SearchResult from './ItemSearch';

export default function SearchView(props) {

  return (
    <div>
      <div className={ styles.itemGrid }>{
        props.items.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
