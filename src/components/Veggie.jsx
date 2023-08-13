import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggie() {
  const[Veggie, setVeggie] = useState([]);
  useEffect(()=>{
    getVeggie();
  },[])
  const getVeggie = async()=>{
    const check = localStorage.getItem('Veggie');
    if(check){
      setVeggie(JSON.parse(check));
    }
    else{
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=63f54752424f4a37acf11731d6a887f9&number=15&tags=vegetarian`);
    const data = await api.json();
    localStorage.setItem('Veggie',JSON.stringify(data.recipes))
    console.log(data);
    setVeggie(data.recipes)
    }
    
  } 
  


  return (
    <div className='mx-52 rounded-lg '>
      <h2 className='text-center my-5 font-semibold text-2xl'>Vegetarian</h2>
    <Splide options={{
      perPage: 4,
      gap: "1rem",
      drag:'free',
      pagination: false,
      arrows: false }} >  
       {Veggie.map((recipes)=>{
        return(                  
            <SplideSlide>
          <div key={recipes.id}>  
          <img src={recipes.image} alt='im' className='rounded-2xl bg-cover'/>
           <p className='text-center'>{recipes.title}</p>
          </div>
            </SplideSlide>
        );
      })} </Splide>
    </div>
  )
}



export default Veggie
