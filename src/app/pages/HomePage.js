import React from 'react'
import { BaseLayout }  from '../layouts'
import { HomeFilms, Hero } from '../components/forHomePage'
import UseFetch from '../hooks/UseFetch.js'
import requests  from '../requests/requests'

const HomePage = () => {
 const [dataPopular] = UseFetch(requests.popularMovies);
 const [dataTrending] = UseFetch(requests.allTrending);
 const [dataNowPlaying] = UseFetch(requests.nowPlaying);
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
