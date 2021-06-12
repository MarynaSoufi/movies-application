import React from 'react'
import styles from './Info.module.scss';
const Info = ({data, casts}) => {
  const {title, original_name, vote_average, overview} = data;
 
  return (
    <div className={styles.info}>
      <h2 className={styles.info__header}>{title ? title : original_name}</h2>
      <span className={styles.info__vote}>{vote_average}/10</span>
      <h3>Overview</h3>
      <p className={styles.info__overview}>{overview}</p>
      
    </div>
  )
}

export default Info;
