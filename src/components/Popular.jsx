import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=63f54752424f4a37acf11731d6a887f9&number=15`);
    const data = await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes));
    console.log(data);
    setPopular(data.recipes)

    }
    
  } 
  


  return (
    <div className='mx-60 '>
      <h2 className='text-center my-5 font-semibold text-2xl'>Popular</h2>
    <Splide options={{
      perPage: 3,
      gap: "1rem",
      pagination: false,
      drag:'free',
      arrows: false }} >  
       {popular.map((recipes)=>{
        return(                  
            <SplideSlide>
          <div key={recipes.id}>  
          <img src={recipes.image} alt='im' className='rounded-2xl bg-cover h-auto  '/>
           <p className='text-center'>{recipes.title}</p>
          </div>
            </SplideSlide>
        );
      })} </Splide>
    </div>
  )
}



export default Popular
