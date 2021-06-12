import axios from '../axios/axios';
import { useState, useEffect } from 'react';

const useFetch = (apiUrl) => {
  const [data, setData] = useState([]);   
  useEffect(async () => {
    console.log('GETTING NEW DATA');
      try {
        const res = await axios.get(apiUrl);
        setData(res.data.results);
        
      }catch (error) {
        console.error(error);
      }
     
    }, [apiUrl]
    
  )
  return [data]
 
}

export default useFetch;
