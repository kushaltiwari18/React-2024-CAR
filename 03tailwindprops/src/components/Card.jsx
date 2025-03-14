import React from 'react'
import owl from '../assets/owl.jpg'


const Card = (props) => {
  console.log(props);
  return (
    <div className=" flex flex-col items-center justify-center 
      border-2 border-red-700 h-full w-full box-border ">

        <img src={owl} alt="test" className='h-1/3 w-1/4 p-2'/>

        <h1 className=' border-2 border-green-400 bg-white text-black text-lg'>{props.userName}</h1>
        <h2 className='border-2'>{props.Obj}</h2>
        <h3>{props.ArrObj[0]}</h3>
        
    </div>
  )
}

export default Card