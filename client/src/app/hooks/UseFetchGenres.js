import axios from '../axios/axios';
import { useState, useEffect } from 'react';

const useFetchGenres = (API_URL) => {
  const [data, setData] = useState(null);
  useEffect( () => {
    const getData = async () => {
      try {
        const res = await axios.get(API_URL);
        setData(res.data.genres);
      }catch (error) {
        console.error(error);
      }

    }
    getData();
  }, [API_URL]
  )
  return [data]
}

export default useFetchGenres;
