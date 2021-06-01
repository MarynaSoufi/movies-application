import React, { useState } from 'react'
import  UseFetch from '../hooks/UseFetch'
import UseFetchGenres from '../hooks/UseFetchGenres.js'
import { BaseLayout }  from '../layouts'
import { TypeListShows, FilmContent, } from '../components/forMovie_ShowsPage';
import {NextBtn, PrevBtn, BtnHolder} from '../components/loadingBtn';
import requests  from '../requests/requests'

const ShowsPage = () => {

  const [page, setPage] = useState(1);
  const [type, setType] = useState('tv/popular');
  const [media, setMedia] = useState('tv');
  const [dataGenres] = UseFetchGenres(requests.genresTv);
 
  const onHandleNext = () => {
    setPage(page +1)
 }

 const onHandlePrev = () => {
   setPage(page -1)
}
    
 const onHandleTypeSelect = (typeName) => {
   setType(typeName)
 };
  


  return (
    <>
    <BaseLayout>
      <TypeListShows handleTypeSelect={onHandleTypeSelect}/>
      <FilmContent genres={dataGenres} page={page} type={type} media={media}/>
      <PrevBtn handlePrev={onHandlePrev}/>
    <NextBtn handleNext={onHandleNext}/>
    </BaseLayout>
    </>
  )
}

export default ShowsPage;
