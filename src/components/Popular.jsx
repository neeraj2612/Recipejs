import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Popular() {
  const[popular, setPopular] = useState([]);
  useEffect(()=>{
    getPopular();
  },[])
  const getPopular = async()=>{
    const check = localStorage.getItem('Popular');
    if(check){
      setPopular(JSON.parse(check));
    }
    else{
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=ab28ec7a962c424b92cdbfbb3f08c9ac&number=15`);
    const data = await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes));
    console.log(data);
    setPopular(data.recipes)

    }
    
  } 
  


  return (
    <div className='mx-60 '>
      <h2 className='text-center my-5 font-semibold text-2xl'>Our Popular Picks</h2>
    <Splide options={{
      perPage: 3,
      gap: "1rem",
      pagination: false,
      drag:'free',
      arrows: false }} >  
       {popular.map((recipes)=>{
        return(                  
            <SplideSlide key={recipes.id}>
          <div >  <Link to={'/recipe/'+recipes.id}>
          <img src={recipes.image} alt='im' className='rounded-2xl bg-cover h-auto shadow-xl '/>
           <p className='text-center'>{recipes.title}</p></Link>
          </div>
            </SplideSlide>
        );
      })} </Splide>
    </div>
  )
}



export default Popular
