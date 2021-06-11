import React from 'react'
import { BaseLayout }  from '../layouts'
import { HomeFilms, Hero } from '../components/forHomePage'
import useFetch from '../hooks/useFetch.js'
import requests  from '../requests/requests'

const HomePage = () => {
 const [dataPopular] = useFetch(requests.popularMovies);
 const [dataTrending] = useFetch(requests.allTrending);
 const [dataNowPlaying] = useFetch(requests.nowPlaying);
  return (
   <>
   <BaseLayout>
    <Hero/>
    <HomeFilms title='Popular Movies' movie={dataPopular && dataPopular.slice(0,6)}/>
    <HomeFilms title='Trending' movie={dataTrending && dataTrending.slice(0,6)}/>
    <HomeFilms title='Now Playing' movie={dataNowPlaying && dataNowPlaying.slice(0,6)}/>
   </BaseLayout>
   </>
  )
}

export default HomePage;
