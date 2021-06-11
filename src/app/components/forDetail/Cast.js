import React from 'react'
import styles from './Cast.module.scss';
import requests from '../../requests/requests';
const Cast = ({cast}) => {
  console.log(cast);

  return (
    <li className={styles.castitem}>
      <img src={`${requests.imageUrl}${cast.profile_path}`} alt="poster-cast"></img>
      <p className={styles.cart__info__title}>{cast.original_name}</p>
    </li>
  )
}

export default Cast;
