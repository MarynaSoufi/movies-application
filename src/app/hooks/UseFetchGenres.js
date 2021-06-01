import axios from '../axios/axios';
import React from 'react'
import { useState, useEffect } from 'react';

const UseFetchGenres = (API_URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
      const getData = async () => {
        try {
          const res = await axios.get(API_URL);
          setData(res.data.genres);
        }catch (error) {
          setError(error.message)
        }

      }
      useEffect(async () => {
        await getData();    
       }, [API_URL]
    )
  return [data, error]
}

export default UseFetchGenres
