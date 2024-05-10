import React from 'react'
import Lottie from 'lottie-react'
import anime2 from '../../public/assets/anime2.json'

function Heroes() {
  return (
    <div className='flex text-7xl items-center font-bold' >
        <ul >
        <h1>A Secure and transparent platform for you </h1>
        <h1>to save your records </h1>
        </ul>
        <div w-2 h-3>
      <Lottie animationData={anime2}/>
      </div>
    </div>
  )
}

export default Heroes
