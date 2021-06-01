import React, { useCallback, useEffect, useRef, useState } from 'react'
import UseFetchGenres from '../hooks/UseFetchGenres.js'
import { BaseLayout }  from '../layouts'
import { TypesListMovies, FilmContent, } from '../components/forMovie_ShowsPage'
import {NextBtn, PrevBtn, BtnHolder} from '../components/loadingBtn'
import requests  from '../requests/requests'

const MoviesPage = () => {
  
  // const [page, setPage] = useState(1);
  //const page = useRef(1);
  const [page, setPage] = useState(1);
  const [type, setType] = useState('movie/popular');
  const [dataGenres] = UseFetchGenres(requests.genresMovie);
  // const [data, setData] = useState(null);
  const [media, setMedia] = useState('movie');
  const [genre, setGenre] = useState([]);

  // const handleGenre = () => {
  //   setGenre
  // }

  const onHandleNext = () => {
     setPage(page +1)
  }

  const onHandlePrev = () => {
    setPage(page -1)
 }
     
  const onHandleTypeSelect = (typeName) => {
    setType(typeName)
  }
 
  
  return (
    <div>
   <BaseLayout>
    <TypesListMovies handleTypeSelect={onHandleTypeSelect}/>
    <FilmContent genres={dataGenres} page={page} type={type} media={media}/>
    <PrevBtn handlePrev={onHandlePrev}/>
    <NextBtn handleNext={onHandleNext}/>
   </BaseLayout>
   </div>
  )
}

export default MoviesPage;