import React from 'react'
import styles from './FilmContent.module.scss';
import Filters from './Filters'
import MoviesFilms from './MoviesFilms'
import  useFetch from '../../hooks/useFetch'
import Usetext from '../../hooks/Usetext';

const FilmContent = ({genres, page, type, media, isVote, score, handleCheck, isGenre, onHandleWord, value, checked}) => {
  const params = Usetext();
  let paramText = params.get('text');
 
  const [films] = useFetch(`${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${paramText}&page=${page}&include_adult=false`);
 
 console.log(films);
 
  return (
    <div className={styles.content}>

        <Filters genres={genres} isVote={isVote} score={score} handleCheck={handleCheck} isGenre={isGenre} checked={checked} onHandleWord={onHandleWord} value={value}/>
        <MoviesFilms movie={films} media={media} score={score} isGenre={isGenre} value={value}/> 
    </div>
  
      
   
  )
}

export default FilmContent;
