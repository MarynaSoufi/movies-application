import React from 'react'
import styles from './Cart.module.scss'
import {
  Link,
} from "react-router-dom";
import requests from '../../requests/requests'
import icon from '../../../review.svg'

const Cart = ({film, media}) => {
  const {title, release_date, vote_average, poster_path, original_name, id,media_type } = film;
  return (
    <li className={styles.cart}>
      <Link  className={styles.cart__link} to={`/detail?type=${media_type || media || 'movie' }&id=${id}`}>
        <img src={`${requests.imageUrl}${poster_path}`} alt="poster film"></img>
        <div className={styles.cart__info}>
          <p className={styles.cart__info__title}>{title ? title : original_name}</p>
          <div className={styles.cart__info__vote}><img className={styles.cart__info__vote__icon} src={icon} alt="vote icon"></img><div>{vote_average}/10</div></div>
          <span className={styles.cart__info__date}>{release_date}</span>
        </div>
      </Link>
     
      
    </li>
  )
}

export default Cart;
