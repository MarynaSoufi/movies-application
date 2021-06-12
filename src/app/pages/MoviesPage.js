import React, { useState } from 'react'
import useFetchGenres from '../hooks/UseFetchGenres.js'
import { BaseLayout }  from '../layouts'
import { TypesListMovies, FilmDiscover } from '../components/forMovie_ShowsPage'
import {NextBtn, PrevBtn } from '../components/loadingBtn'
import requests  from '../requests/requests'
import  useFetch from '../hooks/UseFetch'

const MoviesPage = () => {
  
  const [page, setPage] = useState(1);
  const [type, setType] = useState('all');
  const [dataGenres] = useFetchGenres(requests.genresMovie);
  const [genre, setGenre] = useState([]);
  const [media, setMedia] = useState('movie');
  const [score, setScore] = useState('');
  const [word, setWord] = useState('');
  const [checked, setChecked] = useState(false);
 
  let url = (`${type !== 'all' ? `/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}` : `/discover/movie?api_key=5efef7a95633dca0907412c3c500e759&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${[...genre]}&with_watch_monetization_types=flatrate`}`)
  const [data] = useFetch(url);

   const handleScore= (e) => {
    setScore(e.target.value);
   }
   const handleGenre = (e) => {
    const newGenre = e.target.checked ? [...genre, e.target.id ] : genre.filter((g) => e.target.id !== g);
    setGenre(newGenre);
    if(e.target.checked) {
      setChecked(true);
    }else {
      setChecked(false);
    }
    
   }

  const onHandleNext = () => {
     setPage(page +1)
  }

  const onHandlePrev = () => {
    setPage(page -1)
 }
 
 const handleWord = (e) => {
  setWord(e.target.value);
 }
  const onHandleTypeSelect = (typeName) => {
    setType(typeName)
  }
  return (
    <div>
   <BaseLayout>
    <TypesListMovies handleTypeSelect={onHandleTypeSelect} type={type}/>
    <FilmDiscover data={data} genres={dataGenres} page={page} type={type} media={media} checked={checked} isVote={handleScore} score={score} isGenre={genre} handleCheck={handleGenre} onHandleWord={handleWord} value={word} />
    <PrevBtn handlePrev={onHandlePrev}/>
    <NextBtn handleNext={onHandleNext}/>
   </BaseLayout>
   </div>
  )
}

export default MoviesPage;