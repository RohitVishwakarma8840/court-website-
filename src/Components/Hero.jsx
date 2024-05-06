import React from 'react'

const Hero = () => {
  return (
    <div>
       <video autoPlay muted loop className=" w-full h-[80vh]  object-cover">
          <source src={'/assets/video.mp4'} type="video/mp4" />
        </video>
    </div>
  )
}

export default Hero
