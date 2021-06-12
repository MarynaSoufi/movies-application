import React, { useEffect, useState } from 'react';
import useFetchGenres from '../hooks/UseFetchGenres.js'
import { FilmContent } from '../components/forMovie_ShowsPage';
import { Types } from '../components/forSearchPage'
import { BaseLayout }  from '../layouts';
import Usetext from '../hooks/Usetext';
import {NextBtn, PrevBtn} from '../components/loadingBtn';



const SearchPage = () => {
  const params = Usetext();
  let paramText = params.get('text');
  const [type, setType] = useState(`/search/multi`);
  const [page, setPage] = useState(1);
  const [genreType, setGenreType] = useState('');
  const [dataGenres] = useFetchGenres(genreType);
  const [genre, setGenre] = useState([]);
  const [score, setScore] = useState('');
  const [word, setWord] = useState('');
 
  const handleScore= (e) => {
    setScore(e.target.value);
   }
   const handleGenre = (e) => {
    const newGenre = e.target.checked ? [...genre, e.target.id ] : genre.filter((g) => e.target.id !== g);
    setGenre(newGenre);
   }
   const handleWord = (e) => {
    setWord(e.target.value);
   }

  useEffect(() => {
    if (type == `/search/multi`) {
      setType(`/search/multi`);
      
    }
      
  },[paramText, type])

  const onHandleTypeSelect = (url, typeGenre) => {
    setType(url)
    setGenreType(typeGenre);
  }
  const onHandleNext = () => {
    setPage(page +1)
 }

 const onHandlePrev = () => {
   setPage(page -1)
}

  return (
    <>
    <BaseLayout>
    <Types  handleTypeSelect={onHandleTypeSelect} paramsText={paramText} page={page} type={type}/>
    <FilmContent genres={dataGenres}  page={page} type={type} isVote={handleScore} score={score} isGenre={genre} handleCheck={handleGenre} onHandleWord={handleWord} value={word}/>
    <PrevBtn handlePrev={onHandlePrev}/>
    <NextBtn handleNext={onHandleNext}/>
    </BaseLayout>
    </>
  )
}

export default SearchPage;

