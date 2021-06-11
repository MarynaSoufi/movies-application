import React from 'react'
import styles from './FilmContent.module.scss';
import Filters from './Filters'
import MoviesFilms from './MoviesFilms'

import Usetext from '../../hooks/Usetext';

const FilmDiscover = ({data, genres, page, type, media, isVote, score, handleCheck, isGenre, onHandleWord, value, checked}) => {
  // const params = Usetext();
  // let paramText = params.get('text');
  // let paramDiscover = params.get([isGenre]);
  // console.log(paramDiscover);

  
    
  return (
    <div className={styles.content}>
    <Filters genres={genres} isVote={isVote} score={score} handleCheck={handleCheck} isGenre={isGenre} checked={checked} onHandleWord={onHandleWord} value={value}/> 
    <MoviesFilms movie={data} media={media} score={score} isGenre={isGenre} value={value}/> 
</div>
  )
}

export default FilmDiscover;
