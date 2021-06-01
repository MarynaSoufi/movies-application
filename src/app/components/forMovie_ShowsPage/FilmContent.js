import React from 'react'
import styles from './FilmContent.module.scss';
import Filters from './Filters'
import MoviesFilms from './MoviesFilms'
import  UseFetch from '../../hooks/UseFetch'
import Usetext from '../../hooks/Usetext';

const FilmContent = ({genres, page, type, media}) => {
  // console.log(type);
  // console.log(page);
  const params = Usetext();
  let paramText = params.get('text');
  console.log(paramText);
  let films;
 if(!paramText) {
  [films] = UseFetch(`/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
 }else {
  [films] = UseFetch(`${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${paramText}&page=${page}&include_adult=false`);
 }

 
  return (
    <div className={styles.content}>
        <Filters genres={genres}/> 
        <MoviesFilms movie={films} media={media}/> 
    </div>
  
      
   
  )
}

export default FilmContent;
