import React from 'react'
import requests from '../../requests/requests'
import styles from './Poster.module.scss'

const Poster = ({data}) => {
  const {poster_path, backdrop_path} = data;

 
 
  return (
    <div className={styles.poster}>
      <img className={styles.poster__image} src={`${requests.posterUrl}${poster_path || backdrop_path}`} alt="poster"></img>
    </div>
  )
}

export default Poster;
