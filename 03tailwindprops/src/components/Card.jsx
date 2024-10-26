import React from 'react'
import owl from '../assets/owl.jpg'


const Card = (props) => {
  console.log(props);
  return (
    <div className=" flex flex-col items-center justify-center 
      border-2 border-red-700 h-full w-full box-border ">

        <img src={owl} alt="test" className='h-1/3 w-1/4 '/>

        <h1 className='border-2'>{props.userName}</h1>
        <h2 className='border-2'>{props.Obj}</h2>
        
    </div>
  )
}

export default Card