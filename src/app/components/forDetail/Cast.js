import React from 'react'
import styles from './Cast.module.scss'
const Cast = ({cast}) => {
  // const { name, original_name} = cast;
  console.log(cast);
  console.log(cast);
  return (
    <li>
      <p className={styles.cart__info__title}>{cast.original_name}</p>
    </li>
  )
}

export default Cast;
