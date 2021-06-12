import React from 'react'
import styles from './Genres.module.scss';
import GenresItem from './GenresItem';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts';
const Genres = ({genres, handleCheck, isGenre ,checked}) => {

  const {isDarkMode} = useThemeContext();
  
  return (
    <div className={classNames(styles.genres, `${isDarkMode ? styles.genres__dark : styles.genres}`)}>
      <p className={styles.genres__text}>Genres</p> 
      <ul className={styles.genres__list}>
        {genres && genres.map((g) => <GenresItem key={g.id} genr={g} handleCheck={handleCheck} isGenre={isGenre} checked={checked}/>)}
      </ul>
    </div>
  )
}

export default Genres;
