import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Searched() {
  const[Searched, setSearched] = useState([]);
  let Params = useParams();
  const getSearched = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ab28ec7a962c424b92cdbfbb3f08c9ac&query=${name}&number=9`);
    const recipes = await data.json();
    setSearched(recipes.results);
    console.log(recipes)
  }

  useEffect(()=>{
    getSearched(Params.search)
    console.log(Params.search)
  },[Params.search])
  return (
    <div className='grid grid-cols-3 gap-4 mx-20 my-10'>
  {Searched?.map((item) => (
    <div key={item.id} className='flex flex-col items-center'><Link to={'/recipe/'+item.id}>
      <img src={item.image} alt="" className='rounded-2xl shadow-xl'/></Link>
      <p className='text-center mt-2'>{item.title}</p>
    </div>
  )) ?? null}
</div>

  )
}

export default Searched
