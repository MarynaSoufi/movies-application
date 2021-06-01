import React from 'react'
import {NextBtn, PrevBtn} from './'
const BtnHolder = (next , prev) => {
  console.log(next);
  return (
    <div>
       <PrevBtn handlePrev={prev}/>
      <NextBtn handleNext={next}/>
    </div>
  )
}

export default BtnHolder;
