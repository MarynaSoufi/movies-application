import React from 'react'
import styles from './Info.module.scss';
import Cast from './Cast'
const Info = ({data, casts}) => {
  const {title, original_name, vote_average, overview} = data;
 
  return (
    <div>
      <h2>{title ? title : original_name}</h2>
      <span>{vote_average}/10</span>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Cast</h3>
      <ul>
        {casts && casts.map((c, index) => <Cast key={index} cast={c}/>)}
      </ul>
    </div>
  )
}

export default Info;
