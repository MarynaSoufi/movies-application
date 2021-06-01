import React, { useEffect, useState } from 'react';
import UseFetchGenres from '../hooks/UseFetchGenres.js'
import { FilmContent } from '../components/forMovie_ShowsPage';
import { Types } from '../components/forSearchPage'
import { BaseLayout }  from '../layouts';
import requests  from '../requests/requests';
import Usetext from '../hooks/Usetext';
import {NextBtn, PrevBtn} from '../components/loadingBtn';


const SearchPage = () => {
  const params = Usetext();
  let paramText = params.get('text');
  const [type, setType] = useState(`/search/multi`);
  const [page, setPage] = useState(1);
  const [dataGenres] = UseFetchGenres(requests.genres);
  console.log(type);

  // let [dataSearch] = UseFetch(type);

  useEffect(() => {
      setType(`/search/multi`);
  },[paramText, type])

  const onHandleTypeSelect = (url) => {
    setType(url)
  }
  const onHandleNext = () => {
    setPage(page +1)
 }

 const onHandlePrev = () => {
   setPage(page -1)
}
  const [genre, setGenre] = useState(false);
  // useEffect(() => {
  //   if (genre) {
  //     dataSearch.filter
  //   }
   
  // })
  
  const [selected, setSelected] = useState([]);

  return (
    <>
    <BaseLayout>
    <Types  handleTypeSelect={onHandleTypeSelect} paramsText={paramText} page={page}/>
    <FilmContent genres={dataGenres}  page={page} type={type}/>
    <PrevBtn handlePrev={onHandlePrev}/>
    <NextBtn handleNext={onHandleNext}/>
    </BaseLayout>
    </>
  )
}

export default SearchPage;

