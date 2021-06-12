import React from 'react';
import Cast from './Cast';
import styles from './CastHolder.module.scss';

const CastHolder = ({casts}) => {
  return (
    <>
      <h3>Casts</h3>
      <ul className={styles.castlist}>
        {casts && casts.map((c, index) => <Cast key={index} cast={c}/>)}
     </ul>
    </>
  
  )
}

export default CastHolder;
