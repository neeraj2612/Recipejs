import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react';

function Cuisine() {
  const[cuisine, setCuisine] = useState([]);
  let Params = useParams();
  const getCuisine = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ab28ec7a962c424b92cdbfbb3f08c9ac&cuisine=${name}&number=9`);
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(recipes)
  }

  useEffect(()=>{
    getCuisine(Params.type)
    console.log(Params.type)
  },[Params.type])
  return (
    <div className='grid grid-cols-3 gap-4 mx-20 my-10'>
  {cuisine?.map((item) => (
    <div key={item.id} className='flex flex-col items-center'>
     <Link to={'/recipe/'+item.id}>
      <img src={item.image} alt="" className='rounded-2xl shadow-xl'/>
      <p className='text-center mt-2'>{item.title}</p></Link>
    </div>
  )) ?? null}
</div>

  )
}

export default Cuisine
