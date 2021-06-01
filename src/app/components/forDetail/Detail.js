import React from 'react'
import styles from './Detail'
import Poster from './Poster';
import Info from './Info';
const Detail = ({data, casts}) => {   

  return (
    <div>
      <Poster data={data}/>
      <Info data={data} casts={casts}/>
    </div>
  )
}

export default Detail;
