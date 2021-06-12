import React from 'react'
import styles from './Detail.module.scss';
import Poster from './Poster';
import CastHolder from './CastHolder'
import Info from './Info';
const Detail = ({data, casts}) => {   

  return (
    <div>
      <div className={styles.detail}>
      <Poster data={data}/>
      <Info data={data} casts={casts}/>
      </div>
      <CastHolder casts={casts}/>
    </div>
   
  )
}

export default Detail;
