import React, { useState } from 'react'
import{BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Search() {
    const[Search, setSearch]= useState('');
    const navigate = useNavigate();
    const getSearched=(e)=>{
        e.preventDefault();
        navigate('/Searched/'+Search)

    }
  return (
    <div>
<div className='flex items-center  gap-0 justify-center my-10 '>
 <input type="text" className='w-96 h-12 border rounded-l-full pl-8' onChange={(e)=>{setSearch(e.target.value)}} value={Search}/>
 
  <button type="submit" onClick={getSearched} className='border border-l-0 h-12 w-16 justify-center items-center flex rounded-r-full'><BsSearch className='w-7 h-7 hover:w-8 h-8'/></button>
</div>
    </div>
  )
}

export default Search
