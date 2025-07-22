import React from 'react'

const Lesson1Card = ({title, watched, shadowColor}) => {
  
  return (
    <div className='d-flex my-5 lesson-card justify-content-between' style={{  boxShadow:`0 4px 12px ${shadowColor}` ,}} >
            <div className='d-flex text-black'>
                {title}
                
            </div>
           {watched &&  <div  className='d-flex text-bg-success rounded-5 p-2'>
            <i class="fa-solid fa-check "></i>
            </div>}
    </div>
  )
}

export default Lesson1Card