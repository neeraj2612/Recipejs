import React from 'react'
import{FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import{GiNoodles, GiChopsticks, GiKnifeFork} from 'react-icons/gi'
import { NavLink,Link } from 'react-router-dom'
import Search from './Search'

function Nav() {
  return (<>
<div className="flex items-center justify-center gap-2">
  <Link to="/" className="mr-2">
    <h1 className="text-center text-5xl my-5" id="main">
      <GiKnifeFork />
    </h1>
  </Link>
  <Link to={'/'}>
  <h1 className="text-center text-4xl my-5" id='main'>Recipejs</h1></Link>
</div>
<Search/>
<div className='flex gap-10 justify-center items-center my-4 '>
  <NavLink to={'/cuisine/Italian'} className='flex flex-col items-center  '>
    <FaPizzaSlice className='h-7 w-7 hover:w-8 h-8 '/>
    <h3 className='text-center mt-1'>Italian</h3>
  </NavLink>
  <NavLink to={'/cuisine/American'} className='flex flex-col items-center'>
    <FaHamburger className='h-7 w-7 hover:w-8 h-8'/>
    <h3 className='text-center mt-1'>American</h3>
  </NavLink>
  <NavLink to={'/cuisine/Korean'} className='flex flex-col items-center'>
    <GiNoodles className='h-7 w-7 hover:w-8 h-8'/>
    <h3 className='text-center mt-1'>Korean</h3>
  </NavLink>
  <NavLink to={'/cuisine/Chinese'} className='flex flex-col items-center'>
    <GiChopsticks className='h-7 w-7 hover:w-8 h-8'/>
    <h3 className='text-center mt-1'>Chinese</h3>
  </NavLink>
</div>

    </>
  )
}

export default Nav
