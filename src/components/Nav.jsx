import React from 'react'
import{FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import{GiNoodles, GiChopsticks} from 'react-icons/gi'
import{BsSearch} from 'react-icons/bs'

function Nav() {
  return (<>
 <h1 className='text-center text-4xl my-5 '>Recipejs</h1>
 <div className='flex items-center  gap-0 justify-center my-10 '>
 <input type="text" className='w-96 h-12 border rounded-l-full' />
  <button type="submit" className='border border-l-0 h-12 w-16 justify-center items-center flex rounded-r-full'><BsSearch className='w-7 h-7 hover:w-8 h-8'/></button>
</div>
<div className='flex gap-10 justify-center items-center my-4 '>
  <div className='flex flex-col items-center'>
    <FaPizzaSlice className='h-7 w-7'/>
    <h3 className='text-center mt-1'>Italian</h3>
  </div>
  <div className='flex flex-col items-center'>
    <FaHamburger className='h-7 w-7'/>
    <h3 className='text-center mt-1'>American</h3>
  </div>
  <div className='flex flex-col items-center'>
    <GiNoodles className='h-7 w-7'/>
    <h3 className='text-center mt-1'>Korean</h3>
  </div>
  <div className='flex flex-col items-center'>
    <GiChopsticks className='h-7 w-7'/>
    <h3 className='text-center mt-1'>Chinese</h3>
  </div>
</div>

    </>
  )
}

export default Nav
