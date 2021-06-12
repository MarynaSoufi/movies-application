import axios from '../axios/axios';
import { useState, useEffect } from 'react';

const UseFetchCast = (API_URL) => {
  const [data, setData] = useState([]);
  useEffect( () => {
    const getData = async () => {
      try {
        const res = await axios.get(API_URL);
        setData(res.data.cast.sort((a, b) =>(a.popularity < b.popularity) ? 1 : -1));
      }catch (error) {
        console.error(error);
      } 
    }
    getData();
    }, [API_URL]
  )
  return data;
}
  
    
export default UseFetchCast;
