import axios from '../axios/axios';
import { useState, useEffect } from 'react';

const UseFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)
      
  useEffect(async () => {
    console.log('GETTING NEW DATA');
      try {
        const res = await axios.get(apiUrl);
        setData(res.data.results);
        
      }catch (error) {
        setError(error.message)
      } 
     
    }, [apiUrl]
    
  )
  return [data, error]
 
}

export default UseFetch
