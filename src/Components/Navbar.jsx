import React from 'react'
import { Link ,NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>

<div className="auto rounded overflow-hidden shadow-lg  flex basis-4  background-color: #f6f9fe">
  <img src={'/assets/supreme court.png'} alt="Supreme court image "  />
<ul className='flex space-x-12 p-7'>
 <li className='text-2xl bold'> भारत का सर्वोच्च न्यायालय | </li> 
 <li className='text-2xl bold'>Supreme Court of India </li>
 <li className='text-2xl bold'>|| यतो धर्मस्ततो जय: ||</li>
</ul>

</div>



    <div className="bg-black h-12 " >
      <ul className="flex justify-center space-x-16 py-3 text-white">
        <li className="hover:text-blue-500 font-bold text-white">Home</li>
        <li className="hover:text-blue-500 font-bold text-white">About Us</li>
        <li className="hover:text-blue-500 font-bold text-white">Judges</li>
        <li className="hover:text-blue-500 font-bold text-white">e-services</li>
        <li className="hover:text-blue-500 font-bold text-white">Advocates</li>
        <li className="hover:text-blue-500 font-bold text-white">Log in</li>
      </ul>
    </div>

    
       
     



    </>
  )
}

export default Navbar
